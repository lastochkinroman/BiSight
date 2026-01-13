import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { clients as allClients } from '../data/clients'; // Импортируем данные напрямую

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const client = allClients.find(c => c.id === parseInt(id));

  // Функция для форматирования данных
  const formatData = (value, isCurrency = false, isPercent = false) => {
    if (value === undefined || value === null || value === '') {
      return 'Нет данных';
    }
    if (isCurrency && typeof value === 'number') {
      return `${value.toLocaleString('ru-RU')} руб.`;
    }
    if (isPercent && typeof value === 'number') {
      return `${value}%`;
    }
    return value;
  };

  if (!client) {
    return (
      <div className="client-details">
        <div className="back-link">
          <button onClick={() => navigate(-1)}>← Назад к списку клиентов</button>
        </div>
        <div className="error-message">Клиент с ID {id} не найден</div>
      </div>
    );
  }

  // Проверяем наличие объекта details
  const hasDetails = client.details && typeof client.details === 'object';

  // Выводим данные клиента в консоль для отладки
  console.log('Client data:', client);
  console.log('Client details:', client.details);

  return (
    <div className="client-details">
      <div className="back-link">
        <button onClick={() => navigate(-1)}>← Назад к списку клиентов</button>
      </div>

      <h1>{client.name}</h1>

      <div className="details-grid">
        <div className="details-section">
          <h2>Основная информация</h2>
          <p><strong>Приоритет:</strong> {formatData(client.priority)}</p>
          <p><strong>Сегмент:</strong> {formatData(client.segment)}</p>
          <p><strong>Отрасль:</strong> {formatData(client.industry)}</p>
          <p><strong>Доверие клиента:</strong> {formatData(client.trust)}</p>
        </div>

        <div className="details-section">
          <h2>Финансовая информация</h2>
          <p><strong>Дата:</strong> {hasDetails ? formatData(client.details.date) : 'Нет данных'}</p>
          <p><strong>ИНН:</strong> {hasDetails ? formatData(client.details.inn) : 'Нет данных'}</p>
          <p><strong>Название компании:</strong> {client.name}</p>
          <p><strong>Уровень доверия на начало периода:</strong> 
            {hasDetails ? formatData(client.details.trustStart, false, true) : 'Нет данных'}
          </p>
          <p><strong>Уровень доверия на конец периода:</strong> 
            {hasDetails ? formatData(client.details.trustEnd, false, true) : 'Нет данных'}
          </p>
          <p><strong>Доля оборотов через Сбер:</strong> 
            {hasDetails ? formatData(client.details.turnoverShare, false, true) : 'Нет данных'}
          </p>
        </div>

        {hasDetails && (
          <div className="details-section">
            <h2>Обороты</h2>
            <p><strong>Оборот через р/с:</strong> {formatData(client.details.turnover, true)}</p>
            <p><strong>Оборот через р/с Сбер:</strong> {formatData(client.details.turnoverSber, true)}</p>
            <p><strong>Оборот через р/с не Сбер:</strong> {formatData(client.details.turnoverNonSber, true)}</p>
            <p><strong>ОСЗ:</strong> {formatData(client.details.osz, true)}</p>
          </div>
        )}

        <div className="details-section">
          <h2>Контактная информация</h2>
          <p><strong>Адрес:</strong> {hasDetails ? formatData(client.details.address) : 'Нет данных'}</p>
          <p><strong>Контактное лицо:</strong> {hasDetails ? formatData(client.details.contactPerson) : 'Нет данных'}</p>
          <p><strong>Телефон:</strong> {hasDetails ? formatData(client.details.phone) : 'Нет данных'}</p>
          <p><strong>Email:</strong> {hasDetails ? formatData(client.details.email) : 'Нет данных'}</p>
          <p><strong>Веб-сайт:</strong> {hasDetails ? formatData(client.details.website) : 'Нет данных'}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;