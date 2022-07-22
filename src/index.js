import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// На основі вузла #root створюємо контейнер додатка:
const root = ReactDOM.createRoot(document.getElementById('root'));

// Далі в контейнер монтуємо компонент
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);