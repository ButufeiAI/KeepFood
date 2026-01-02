import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/authservice';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { routes } from '../../../core/routes/routes';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
AllRoutes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public confirmPassword = false;
  password:boolean[]= [false];
  togglePassword(i:number):void{
    this.password[i]=!this.password[i]
  }
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
    rememberme :new FormControl('',[Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}



error = false;
errorMessage=''
private errorTimeoutId: any;
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

signup() {
  this.form.markAllAsTouched();

  const { email, password, confirmpassword,rememberme  } = this.form.value;

  // Field validations


  if (!email) {
    this.showError('Please enter the Email');
    return;
  }

  if (!password) {
    this.showError('Please enter the Password');
    return;
  }

  if (!confirmpassword) {
    this.showError('Please confirm your Password');
    return;
  }
  if (!rememberme) {
    this.showError('Please click the checkbox');
    return;
  }

  // Form validation
  if (!this.form.valid) {
    this.showError('Please enter the valid data');
    return;
  }

  // Password match
  if (password !== confirmpassword) {
    this.showError('Passwords do not match');
    return;
  }

  //  Save credentials
 if (rememberme) {
    localStorage.setItem('registered_email', email);
    localStorage.setItem('registered_password', password);
    this.showError('Credentials Saved.');
  }

  //  SUCCESS MESSAGE
  this.showError('Welcome to DreamsPOS.');

  //  Navigate after short delay (UX-friendly)
  setTimeout(() => {
    this.confirmPassword = true;
    this.auth.logout();         // change route if needed
  }, 1500);
}


}
