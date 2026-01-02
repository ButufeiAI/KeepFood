import { Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Router, RouterLink, ROUTES } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/authservice';
import { routes } from '../../../core/routes/routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
AllRoutes =routes
  form = new FormGroup({
  email: new FormControl('demo@example.com', [
    Validators.email,
    Validators.required,
  ]),
  password: new FormControl('12345', [Validators.required]),
  remember_me: new FormControl(false)
});

  get f() {
    return this.form.controls;
  }

constructor(private auth: AuthService, private router:Router) {}
password=false;
togglePassword():void{
  this.password=!this.password
}


rememberme=false;



error = false;
private errorTimeoutId: any;


toggleRemember():void {
  this.rememberme = !this.rememberme
  if(this.rememberme === true){
    this.showError('Email And Password Saved');
  }
  else{
    this.error = false
  }
}
errorMessage=''
private errorTimeout: any;
submit() {
  if (this.form.valid) {
    const { email, password,remember_me } = this.form.value;
    const success = this.auth.login(email!, password!);

    if (success) {
      localStorage.setItem('authorized', 'true');  // SAVE SESSION
      this.router.navigate(['/index']);  
       if (remember_me) {
        localStorage.setItem('saved_email', email!);
        localStorage.setItem('saved_password', password!);
        this.toggleRemember();
      } else {
        localStorage.removeItem('saved_email');
        localStorage.removeItem('saved_password');
      }          // GO TO DASHBOARD
    } else {
      this.form.markAllAsTouched();
      this.showError('Email or Password Incorrect');
       
    }

  } else {
    this.form.markAllAsTouched();
    this.showError('Please enter a valid email and password');
  }
}
showError(message: string): void {
  // 🔴 Show error
  this.errorMessage = message;
  this.error = true;

  // 🧹 Clear previous timeout
  if (this.errorTimeoutId) {
    clearTimeout(this.errorTimeoutId);
  }

  // ⏱ Auto hide after 3s
  this.errorTimeoutId = setTimeout(() => {
    this.error = false;
    this.errorTimeoutId = null;
  }, 2000);
}

ngOnInit() {
  const savedEmail = localStorage.getItem('saved_email');
  const savedPassword = localStorage.getItem('saved_password');

  if (savedEmail && savedPassword) {
    this.form.patchValue({
      email: savedEmail,
      password: savedPassword,
      remember_me: true
    });
  }
}

}
