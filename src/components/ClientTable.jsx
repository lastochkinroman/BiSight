import React from 'react';

const ClientTable = ({
  clients,
  requestSort,
  sortConfig,
  handleView,
  handleEdit,
  handleDelete
}) => {
  const getClassNamesFor = (name) => {
    if (!sortConfig) return;
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="client-table">
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={`button ${getClassNamesFor('name')}`}
              >
                Наименование
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('priority')}
                className={`button ${getClassNamesFor('priority')}`}
              >
                Приоритет
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('segment')}
                className={`button ${getClassNamesFor('segment')}`}
              >
                Сегмент
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('industry')}
                className={`button ${getClassNamesFor('industry')}`}
              >
                Отрасль
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('trust')}
                className={`button ${getClassNamesFor('trust')}`}
              >
                Доверие клиента
              </button>
            </th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.priority}</td>
              <td>{client.segment}</td>
              <td>{client.industry}</td>
              <td>{client.trust}</td>
              <td className="actions">
                <button className="button" onClick={() => handleView(client.id)}>👁️</button>
                <button className="button" onClick={() => handleEdit(client.id)}>✏️</button>
                <button className="button" onClick={() => handleDelete(client.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
