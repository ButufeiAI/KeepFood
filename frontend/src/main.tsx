import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Moment.js - required by bootstrap-daterangepicker
import moment from 'moment';
// Make moment available globally for bootstrap-daterangepicker
(window as any).moment = moment;
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// OverlayScrollbars
import "overlayscrollbars/overlayscrollbars.css";
// Template styles
import "./assets-template/scss/custom.scss";
// Icons
import "./assets-template/icon/lucide/lucide.css";
// Scroll to top on route change
import ScrollToTop from './components-template/scroll-to-top/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
