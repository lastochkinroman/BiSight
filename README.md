# Bisight - AI помощник для работы с клиентами

Веб-приложение для управления клиентами с аналитикой и AI-чатом.
Основные функции

    Просмотр и управление базой клиентов

    Чат-бот с AI для работы с данными

    Простая аналитика и отчеты

    Адаптивный интерфейс

Технологии

    Frontend: React 19, React Router, CSS Modules

    Backend: Node.js, Express.js

    AI: LangChain, OpenAI API

Установка и запуск

    Клонируйте репозиторий:


git clone https://github.com/ROMABLUNT/bisight.git
cd bisight

    Установите зависимости:


npm install

    Создайте файл .env и добавьте API-ключ OpenAI:


OPENAI_API_KEY=ваш_ключ

    Запустите приложение:


npm run dev

Приложение будет доступно на http://localhost:3000
Структура проекта

    /src/components/ - React-компоненты

    /src/data/ - данные приложения

    server.js - серверная часть

    App.js - главный компонент

Скрипты

    npm run dev - запуск в режиме разработки

    npm run server - запуск только сервера

    npm run build - сборка для продакшена

    npm test - запуск тестов

API

    GET /api/clients - получение списка клиентов

    POST /api/chat - отправка сообщения в AI-чат
