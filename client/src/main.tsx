import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useAuthStore } from './stores/auth.store';
import { ToastProvider } from './components';

// Initialiser l'authentification au démarrage
const { checkAuth } = useAuthStore.getState();
checkAuth();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
);

