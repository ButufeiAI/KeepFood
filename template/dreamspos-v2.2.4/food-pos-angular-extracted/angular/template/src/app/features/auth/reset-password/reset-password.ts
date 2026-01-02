import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { routes } from '../../../core/routes/routes';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  imports: [RouterLink,FormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  AllRoutes = routes;
  password : boolean[] =[false]
  togglePassword(i:number):void{
    this.password[i]=!this.password[i];
  }
constructor(private router:Router){}
redirect():void{
  this.router.navigate([routes.login])
}
}
