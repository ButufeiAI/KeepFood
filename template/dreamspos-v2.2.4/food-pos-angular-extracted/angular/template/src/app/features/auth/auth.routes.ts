import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth').then(m => m.Auth),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login),},
      { path: 'register', loadComponent: () => import('./register/register').then((m) => m.Register),},
      { path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password').then((m) => m.ForgotPassword),},
      { path: 'email-verification', loadComponent: () => import('./email-verification/email-verification').then((m) => m.EmailVerification),},
      { path: 'otp', loadComponent: () => import('./otp/otp').then((m) => m.Otp),},
      { path: 'reset-password', loadComponent: () => import('./reset-password/reset-password').then((m) => m.ResetPassword),},
    ],
  },
];
