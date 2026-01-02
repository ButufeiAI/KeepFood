import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxSkeletonLoader } from 'ngx-skeleton-loader';
import { provideDaterangepickerLocale } from "ngx-daterangepicker-bootstrap";
import { routes } from './app.routes';
import { register as registerSwiper } from 'swiper/element';
registerSwiper();

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideDaterangepickerLocale({
      separator: ' - ',
      applyLabel: 'Okay',
    }),

  ]
};
