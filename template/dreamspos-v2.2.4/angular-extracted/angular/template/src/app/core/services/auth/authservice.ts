import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../routes/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
routes =routes
  constructor(private router: Router) {}
  
login(email: string, password: string): boolean {
   const savedEmail = localStorage.getItem('registered_email');
  const savedPassword = localStorage.getItem('registered_password');
  if (email === 'demo@example.com' && password === '12345') {
    localStorage.setItem('authenticated', 'true');

    this.router.navigate(['/index']).then(r =>
      console.log('Navigate success:', r)
    );

    return true;   // ✔ SUCCESS
  }
   if (email === savedEmail && password === savedPassword) {
    localStorage.setItem('authenticated', 'true');
    return true;
  }

  return false;    // ❌ WRONG CREDENTIALS
}


  logout() {
    localStorage.removeItem('authenticated');
    this.router.navigate(['/auth/login']);
  }


}
