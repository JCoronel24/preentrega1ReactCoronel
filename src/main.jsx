import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap antes de tus propios estilos
import './index.css'; // Importa tus estilos personalizados
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asegúrate de tener la extensión .jsx si tu archivo App tiene esta extensión

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);