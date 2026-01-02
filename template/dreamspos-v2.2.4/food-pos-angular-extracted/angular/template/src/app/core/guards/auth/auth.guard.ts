// import { Injectable } from '@angular/core';
// import { Router, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { routes } from '../../routes/routes';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard  {
//   constructor(private router: Router) {}
//   canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (localStorage.getItem('authorized')) {
//       this.router.navigate([routes.index]);
//       return true;
//     } else {
//       this.router.navigate(['/auth/login']);
//       return false;
//     }
//   }
// }
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn & CanMatchFn = () => {
  const router = inject(Router);
  const isLogged = !!localStorage.getItem('authorized');

  if (isLogged) return true;

  return router.parseUrl('/auth/login');
};
