// src/App.js

import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ИЗМЕНЕНИЕ: Импортируем clients_current из нашего нового файла db.js
// и даем ему псевдоним initialClients для совместимости с остальным кодом.
import { clients_current as initialClients } from './db.js';
import ClientTable from './components/ClientTable';
import ClientDetails from './components/ClientDetails';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
// ИЗМЕНЕНИЕ: ChatBot теперь не требует initialClients, так как он работает через API
import ChatBot from './components/ChatBot';
import './App.css';


function App() {
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(5);

  // УДАЛЕНО: useEffect для загрузки из localStorage,
  // так как мы больше не используем saveClients и localStorage в этом MVP.
  // Данные всегда будут загружаться из db.js при старте.

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedClients = useMemo(() => {
    let sortableClients = [...clients];
    if (sortConfig.key) {
      sortableClients.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableClients;
  }, [clients, sortConfig]);

  const filteredClients = sortedClients.filter(client =>
    Object.values(client).some(
      val => typeof val === 'string' &&
        val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleView = (id) => {
    window.location.href = `/client/${id}`;
  };

  const handleEdit = (id) => {
    console.log('Редактирование клиента с ID:', id);
  };

  // ИЗМЕНЕНИЕ: Упрощаем handleDelete.
  // Теперь она просто удаляет клиента из состояния компонента, без сохранения в localStorage.
  const handleDelete = (id) => {
    const updatedClients = clients.filter(client => client.id !== id);
    setClients(updatedClients);
    // saveClients(updatedClients); // <-- Эта строка удалена
    if (currentClients.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-left">
            <div className="logo">Бизнес Аналитика Про</div>
          </div>
          <div className="header-right">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </header>

        <div className="main-content">
          <nav className="side-menu">
            <ul>
              <li className="active">Мои клиенты</li>
              <li>Аналитика</li>
              <li>Отчеты</li>
              <li>Настройки</li>
              <li>Помощь</li>
            </ul>
          </nav>

          <div className="content-area">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="content-header">
                    <h1>Мои клиенты</h1>
                    <button
                      className="add-client"
                      onClick={() => console.log('Добавление нового клиента')}
                    >
                      + Добавить клиента
                    </button>
                  </div>

                  <ClientTable
                    clients={currentClients}
                    requestSort={requestSort}
                    sortConfig={sortConfig}
                    handleView={handleView}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />

                  <Pagination
                    clientsPerPage={clientsPerPage}
                    totalClients={filteredClients.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </>
              } />
              {/* Для ClientDetails нужно передать полный список клиентов */}
              <Route path="/client/:id" element={<ClientDetails clients={clients} />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* ChatBot больше не нуждается в пропсах с клиентами */}
      <ChatBot />
    </Router>
  );
}

export default App;
