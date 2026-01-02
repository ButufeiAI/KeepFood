import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import store from './core/redux/store';
import { base_path } from './environment';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/common-error-boundary/ErrorBoundary';
import ALLRoutes from './routes/router';
import DynamicTitle from './routes/dynamicTitle';
import { AuthProvider } from './pages/authentication/auth-context/authContext';
import "./assets/icon/lucide/lucide.css";
import "./assets/scss/custom.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <AuthProvider>
          <ErrorBoundary>
            <ALLRoutes />
            <DynamicTitle />
          </ErrorBoundary>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
