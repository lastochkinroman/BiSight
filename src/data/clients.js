export let clients = [
  {
    id: 1,
    name: "ООО 'ТехноПром'",
    priority: "Высокий",
    segment: "Корпоративный",
    industry: "Промышленность",
    trust: "Высокое",
    details: {
      date: "2023-01-01",
      inn: "1234567890",
      companyName: "ООО 'ТехноПром'",
      trustStart: 85,
      trustEnd: 90,
      turnoverShare: 75,
      turnover: 1000000,
      turnoverSber: 750000,
      turnoverNonSber: 250000,
      osz: 50000,
      address: "г. Москва, ул. Ленина, д. 1",
      contactPerson: "Иванов Иван Иванович",
      phone: "+7 (495) 123-45-67",
      email: "info@technoprom.ru",
      website: "www.technoprom.ru"
    }
  },
  {
    id: 2,
    name: "ИП Смирнов А.В.",
    priority: "Средний",
    segment: "Малый бизнес",
    industry: "Розничная торговля",
    trust: "Среднее",
    details: {
      date: "2023-01-02",
      inn: "0987654321",
      companyName: "ИП Смирнов А.В.",
      trustStart: 60,
      trustEnd: 65,
      turnoverShare: 50,
      turnover: 500000,
      turnoverSber: 250000,
      turnoverNonSber: 250000,
      osz: 25000,
      address: "г. Санкт-Петербург, ул. Невского, д. 5",
      contactPerson: "Смирнов Алексей Викторович",
      phone: "+7 (812) 987-65-43",
      email: "smirnov@mail.ru",
      website: "www.smirnov-shop.ru"
    }
  },
  {
    id: 3,
    name: "АО 'ФинТраст'",
    priority: "Высокий",
    segment: "Корпоративный",
    industry: "Финансы",
    trust: "Высокое",
    details: {
      date: "2023-01-03",
      inn: "1357924680",
      companyName: "АО 'ФинТраст'",
      trustStart: 90,
      trustEnd: 95,
      turnoverShare: 80,
      turnover: 2000000,
      turnoverSber: 1600000,
      turnoverNonSber: 400000,
      osz: 100000,
      address: "г. Казань, ул. Баумана, д. 10",
      contactPerson: "Петров Петр Петрович",
      phone: "+7 (843) 123-45-67",
      email: "info@fintrust.ru",
      website: "www.fintrust.ru"
    }
  },
  {
    id: 4,
    name: "ООО 'СтройГарант'",
    priority: "Высокий",
    segment: "Корпоративный",
    industry: "Строительство",
    trust: "Среднее",
    details: {
      date: "2023-01-04",
      inn: "2468135790",
      companyName: "ООО 'СтройГарант'",
      trustStart: 70,
      trustEnd: 75,
      turnoverShare: 60,
      turnover: 1500000,
      turnoverSber: 900000,
      turnoverNonSber: 600000,
      osz: 75000,
      address: "г. Екатеринбург, ул. Строителей, д. 15",
      contactPerson: "Сидоров Сидор Сидорович",
      phone: "+7 (343) 234-56-78",
      email: "info@stroygarant.ru",
      website: "www.stroygarant.ru"
    }
  },
  {
    id: 5,
    name: "ИП Козлова Е.С.",
    priority: "Низкий",
    segment: "Микробизнес",
    industry: "Услуги",
    trust: "Низкое",
    details: {
      date: "2023-01-05",
      inn: "9876543210",
      companyName: "ИП Козлова Е.С.",
      trustStart: 40,
      trustEnd: 45,
      turnoverShare: 30,
      turnover: 200000,
      turnoverSber: 60000,
      turnoverNonSber: 140000,
      osz: 10000,
      address: "г. Новосибирск, ул. Кирова, д. 20",
      contactPerson: "Козлова Елена Сергеевна",
      phone: "+7 (383) 345-67-89",
      email: "kozlova@mail.ru",
      website: "www.kozlova-services.ru"
    }
  },
  {
    id: 6,
    name: "АО 'МедТехнологии'",
    priority: "Высокий",
    segment: "Корпоративный",
    industry: "Здравоохранение",
    trust: "Высокое",
    details: {
      date: "2023-01-06",
      inn: "1122334455",
      companyName: "АО 'МедТехнологии'",
      trustStart: 85,
      trustEnd: 90,
      turnoverShare: 70,
      turnover: 1800000,
      turnoverSber: 1260000,
      turnoverNonSber: 540000,
      osz: 90000,
      address: "г. Нижний Новгород, ул. Медицинская, д. 25",
      contactPerson: "Смирнова Анна Ивановна",
      phone: "+7 (831) 456-78-90",
      email: "info@medtech.ru",
      website: "www.medtech.ru"
    }
  },
  {
    id: 7,
    name: "ООО 'АгроПродукт'",
    priority: "Средний",
    segment: "Средний бизнес",
    industry: "Сельское хозяйство",
    trust: "Высокое",
    details: {
      date: "2023-01-07",
      inn: "5566778899",
      companyName: "ООО 'АгроПродукт'",
      trustStart: 75,
      trustEnd: 80,
      turnoverShare: 65,
      turnover: 1200000,
      turnoverSber: 780000,
      turnoverNonSber: 420000,
      osz: 60000,
      address: "г. Ростов-на-Дону, ул. Сельская, д. 30",
      contactPerson: "Иванова Мария Петровна",
      phone: "+7 (863) 567-89-01",
      email: "info@agroproduct.ru",
      website: "www.agroproduct.ru"
    }
  },
  {
    id: 8,
    name: "ИП 'ТехноСервис'",
    priority: "Средний",
    segment: "Малый бизнес",
    industry: "IT",
    trust: "Среднее",
    details: {
      date: "2023-01-08",
      inn: "9988776655",
      companyName: "ИП 'ТехноСервис'",
      trustStart: 60,
      trustEnd: 65,
      turnoverShare: 50,
      turnover: 800000,
      turnoverSber: 400000,
      turnoverNonSber: 400000,
      osz: 40000,
      address: "г. Самара, ул. Техническая, д. 35",
      contactPerson: "Петров Алексей Владимирович",
      phone: "+7 (846) 678-90-12",
      email: "info@technoservice.ru",
      website: "www.technoservice.ru"
    }
  },
  {
    id: 9,
    name: "АО 'ТрансЛогистик'",
    priority: "Высокий",
    segment: "Корпоративный",
    industry: "Логистика",
    trust: "Высокое",
    details: {
      date: "2023-01-09",
      inn: "4455667788",
      companyName: "АО 'ТрансЛогистик'",
      trustStart: 80,
      trustEnd: 85,
      turnoverShare: 75,
      turnover: 2500000,
      turnoverSber: 1875000,
      turnoverNonSber: 625000,
      osz: 125000,
      address: "г. Краснодар, ул. Транспортная, д. 40",
      contactPerson: "Сидоров Иван Петрович",
      phone: "+7 (861) 789-01-23",
      email: "info@translogistic.ru",
      website: "www.translogistic.ru"
    }
  },
  {
    id: 10,
    name: "ООО 'ЭкоТех'",
    priority: "Средний",
    segment: "Средний бизнес",
    industry: "Экология",
    trust: "Среднее",
    details: {
      date: "2023-01-10",
      inn: "3322114455",
      companyName: "ООО 'ЭкоТех'",
      trustStart: 65,
      trustEnd: 70,
      turnoverShare: 55,
      turnover: 900000,
      turnoverSber: 495000,
      turnoverNonSber: 405000,
      osz: 45000,
      address: "г. Воронеж, ул. Экологическая, д. 45",
      contactPerson: "Кузнецова Ольга Сергеевна",
      phone: "+7 (473) 890-12-34",
      email: "info@ecotech.ru",
      website: "www.ecotech.ru"
    }
  }
];

// Функция для сохранения в localStorage
export const saveClients = (updatedClients) => {
  clients = updatedClients;
  localStorage.setItem('clients', JSON.stringify(updatedClients));
};

// Загрузка из localStorage при инициализации
if (localStorage.getItem('clients')) {
  clients = JSON.parse(localStorage.getItem('clients'));
}

// Функция для обновления данных клиентов на следующий месяц
export const updateClientsForNextMonth = () => {
  const updatedClients = clients.map(client => {
    const details = client.details;
    const turnoverChange = Math.random() > 0.5 ? 1.1 : 0.9; // Увеличение или уменьшение оборота на 10%
    const trustChange = Math.random() > 0.5 ? 5 : -5; // Увеличение или уменьшение уровня доверия на 5

    return {
      ...client,
      details: {
        ...details,
        date: "2023-02-01", // Обновляем дату на следующий месяц
        trustStart: details.trustEnd,
        trustEnd: Math.min(100, Math.max(0, details.trustEnd + trustChange)), // Убедимся, что уровень доверия остается в пределах 0-100
        turnover: Math.round(details.turnover * turnoverChange),
        turnoverSber: Math.round(details.turnoverSber * turnoverChange),
        turnoverNonSber: Math.round(details.turnoverNonSber * turnoverChange),
      }
    };
  });

  saveClients(updatedClients);
};

// Функция для анализа изменения уровня доверия
export const analyzeTrustChange = (inn) => {
  const client = clients.find(client => client.details.inn === inn);
  if (!client) return "Клиент не найден";

  const currentTrust = client.details.trustEnd;
  const currentTurnover = client.details.turnover;
  const currentTurnoverShare = client.details.turnoverSber / client.details.turnover;

  updateClientsForNextMonth();
  const updatedClient = clients.find(client => client.details.inn === inn);
  const newTrust = updatedClient.details.trustEnd;
  const newTurnover = updatedClient.details.turnover;
  const newTurnoverShare = updatedClient.details.turnoverSber / updatedClient.details.turnover;

  let analysis = `Анализ изменения уровня доверия для клиента ${client.name}:\n`;
  analysis += `Текущий уровень доверия: ${currentTrust}\n`;
  analysis += `Новый уровень доверия: ${newTrust}\n`;
  analysis += `Изменение уровня доверия: ${newTrust - currentTrust}\n`;
  analysis += `Текущий оборот: ${currentTurnover}\n`;
  analysis += `Новый оборот: ${newTurnover}\n`;
  analysis += `Изменение оборота: ${newTurnover - currentTurnover}\n`;
  analysis += `Текущая доля оборота в Сбере: ${currentTurnoverShare.toFixed(2)}\n`;
  analysis += `Новая доля оборота в Сбере: ${newTurnoverShare.toFixed(2)}\n`;

  if (newTrust > currentTrust) {
    analysis += "Уровень доверия увеличился. Клиент продвигается по лестнице доверия.";
  } else if (newTrust < currentTrust) {
    analysis += "Уровень доверия уменьшился. Клиент может опуститься по лестнице доверия.";
  } else {
    analysis += "Уровень доверия не изменился.";
  }

  return analysis;
};

export default clients;
