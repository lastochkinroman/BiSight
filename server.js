// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ChatOpenAI } = require('@langchain/openai');
const { HumanMessage, SystemMessage } = require('@langchain/core/messages');
require('dotenv').config();

const { clients_current, clients_future } = require('./src/db.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let chatGPT;
try {
  chatGPT = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.7,
  });
} catch (error) {
  console.log('OpenAI API key not found, using mock responses');
  chatGPT = null;
}

const getClientLevel = (details) => {
  if (!details) return "Нет данных";
  const { revenue, revenueGrowth, customerSatisfaction } = details;

  if (customerSatisfaction >= 90 && revenueGrowth >= 20) return "Премиум (Высокая удовлетворенность и рост)";
  if (customerSatisfaction >= 80 && revenueGrowth >= 15) return "Золото (Хорошая удовлетворенность и рост)";
  if (customerSatisfaction >= 70 && revenueGrowth >= 10) return "Серебро (Умеренная удовлетворенность и рост)";
  return "Бронза (Базовый уровень)";
};

const getNextLevelRequirements = (details) => {
    if (!details) return "Нет данных";
    const { revenue, revenueGrowth, customerSatisfaction } = details;

    if (customerSatisfaction < 70) {
        const satisfactionNeeded = 70 - customerSatisfaction;
        return `Для достижения уровня Серебро улучшите удовлетворенность клиентов на ${satisfactionNeeded.toFixed(1)} пунктов.`;
    }
    if (revenueGrowth < 10) {
        const growthNeeded = 10 - revenueGrowth;
        return `Для достижения уровня Серебро увеличьте рост доходов на ${growthNeeded.toFixed(1)}%.`;
    }
    if (customerSatisfaction < 80 || revenueGrowth < 15) {
        const satisfactionNeeded = 80 - customerSatisfaction;
        const growthNeeded = 15 - revenueGrowth;
        return `Для достижения уровня Золото улучшите удовлетворенность на ${Math.max(0, satisfactionNeeded).toFixed(1)} пунктов и рост на ${Math.max(0, growthNeeded).toFixed(1)}%.`;
    }
    if (customerSatisfaction < 90 || revenueGrowth < 20) {
        const satisfactionNeeded = 90 - customerSatisfaction;
        const growthNeeded = 20 - revenueGrowth;
        return `Для достижения уровня Премиум улучшите удовлетворенность на ${Math.max(0, satisfactionNeeded).toFixed(1)} пунктов и рост на ${Math.max(0, growthNeeded).toFixed(1)}%.`;
    }
    return "Клиент уже находится на уровне Премиум.";
};


app.post('/api/chat', async (req, res) => {
  const { inn } = req.body;

  if (!inn || !/^\d{10,12}$/.test(inn)) {
    return res.json({ reply: "Пожалуйста, введите корректный ИНН (10 или 12 цифр)." });
  }

  const currentClient = clients_current.find(c => c.inn === inn);
  const futureClient = clients_future.find(c => c.inn === inn);

  if (!currentClient) {
    return res.json({ reply: `Клиент с ИНН ${inn} не найден в базе.` });
  }

  const currentDetails = currentClient.details;
  const futureDetails = futureClient ? futureClient.details : null;
  const currentLevel = getClientLevel(currentDetails);
  const nextLevelInfo = getNextLevelRequirements(currentDetails);

  let promptData = `
    **Сводка по клиенту "${currentClient.name}" (ИНН: ${inn})**

    **Текущие показатели:**
    - Доход: $${currentDetails.revenue.toLocaleString('en-US')}
    - Рост доходов: ${currentDetails.revenueGrowth}%
    - Удовлетворенность клиентов: ${currentDetails.customerSatisfaction}/100
    - **Текущий уровень:** ${currentLevel}
    - **Рекомендация по росту:** ${nextLevelInfo}
  `;

  if (futureDetails) {
    const futureLevel = getClientLevel(futureDetails);

    promptData += `
      **Прогнозные показатели на следующий месяц:**
      - Доход: $${futureDetails.revenue.toLocaleString('en-US')}
      - Рост доходов: ${futureDetails.revenueGrowth}%
      - Удовлетворенность клиентов: ${futureDetails.customerSatisfaction}/100
      - **Прогнозный уровень:** ${futureLevel}
    `;
  } else {
    promptData += "\nПрогнозные данные на следующий месяц отсутствуют.";
  }

  try {
    let reply;
    if (chatGPT) {
      const messages = [
        new SystemMessage({
          content: `Вы — продвинутый бизнес-аналитик. Ваша задача — анализировать показатели эффективности клиентов и давать четкие, структурированные оценки.
          1. Начните с предоставленной сводки по клиенту.
          2. Проанализируйте изменения показателей между текущим и прогнозируемым периодами.
          3. Сделайте вывод: клиент растет, падает или стабилен?
          4. Спрогнозируйте изменения уровня удовлетворенности и уровня партнерства.
          5. Предложите 1-2 конкретных действия для менеджера, чтобы помочь клиенту улучшиться или предотвратить спад.
          Отвечайте в формате Markdown для лучшего отображения.`
        }),
        new HumanMessage({ content: promptData })
      ];

      const response = await chatGPT.invoke(messages);
      reply = response.content;
    } else {
      // Mock response when no API key
      reply = `**Бизнес-анализ для ${currentClient.name}**

На основе текущих показателей:
- **Производительность:** ${currentLevel}
- **Тренд:** ${futureDetails ? (futureDetails.revenueGrowth > currentDetails.revenueGrowth ? 'Растущий' : 'Стабильный') : 'Данные ограничены'}

**Рекомендации:**
1. Сосредоточиться на улучшении удовлетворенности клиентов
2. Тщательно отслеживать тренды роста доходов

*Примечание: Это демо-ответ. Добавьте OPENAI_API_KEY в .env для ИИ-анализа.*`;
    }
    res.json({ reply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
