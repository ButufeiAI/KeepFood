import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../core/routes/routes';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule,RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
AllRoutes = routes;
constructor(private router:Router){}
redirect():void{
  this.router.navigate([this.AllRoutes.emailVerification])
}
} 
