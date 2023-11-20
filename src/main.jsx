import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Mettez à jour l'importation de createRoot
import { createRoot } from 'react-dom/client';

// Utilisez createRoot pour rendre votre application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
