import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtp } from 'primeng/inputotp';
import { routes } from '../../../core/routes/routes';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-otp',
  imports: [InputOtp,FormsModule,RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
})
export class Otp {
  AllRoutes = routes;
  value : any
  togglereset():void{
    this.value=null;
  }
constructor(private router:Router){}
redirect():void{
  this.router.navigate([routes.resetPassword])
}
}
