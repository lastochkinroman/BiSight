import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

// Компонент для кнопки в чате
const QuickReplyButton = ({ text, onClick }) => (
  <button className="quick-reply-btn" onClick={onClick}>
    {text}
  </button>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Привет! Я Алекс, ваш бизнес-ассистент. Чем могу помочь?",
      sender: 'bot',
      // Добавляем компонент кнопки в стартовое сообщение
      component: <QuickReplyButton text="Отчет по клиенту" onClick={() => handleQuickReplyClick()} />
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isWaitingForInn, setIsWaitingForInn] = useState(false); // Состояние ожидания ИНН
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки ответа
  const messagesEndRef = useRef(null);

  // Функция для обработки клика по кнопке
  const handleQuickReplyClick = () => {
    const botMessage = {
      id: messages.length + 1,
      text: "Пожалуйста, введите ИНН клиента:",
      sender: 'bot'
    };
    setMessages(prev => [...prev, botMessage]);
    setIsWaitingForInn(true); // Переключаемся в режим ожидания ИНН
  };


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    const innToSend = inputValue; // Сохраняем ИНН перед очисткой
    setInputValue('');

    if (isWaitingForInn) {
      setIsLoading(true);
      setIsWaitingForInn(false); // Выходим из режима ожидания

      try {
        // Отправляем ИНН на сервер
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
        const response = await axios.post(`${apiBaseUrl}/api/chat`, { inn: innToSend });
        const botMessage = {
          id: messages.length + 2,
          text: response.data.reply,
          sender: 'bot'
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error:', error);
        const errorMessage = {
          id: messages.length + 2,
          text: "Извините, произошла ошибка при обработке вашего запроса.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Стандартный ответ, если мы не в режиме ожидания ИНН
      const defaultBotMessage = {
        id: messages.length + 2,
        text: "Чтобы получить отчет по клиенту, пожалуйста, нажмите кнопку 'Отчет по клиенту'.",
        sender: 'bot',
        component: <QuickReplyButton text="Отчет по клиенту" onClick={() => handleQuickReplyClick()} />
      };
      setMessages(prev => [...prev, defaultBotMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h3>Алекс</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }}></div>
                {message.component && <div className="quick-reply-container">{message.component}</div>}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isWaitingForInn ? "Введите ИНН..." : "Введите ваш вопрос..."}
              disabled={isLoading}
            />
            <button onClick={handleSendMessage} disabled={isLoading}>
              Отправить
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
