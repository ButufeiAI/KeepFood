import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },

  { path: '',   
    loadChildren: () =>
      import('./features/pages/pages.routes').then(m => m.PAGES_ROUTES),
  },

  { path: '**', redirectTo: 'auth/login' },
];
