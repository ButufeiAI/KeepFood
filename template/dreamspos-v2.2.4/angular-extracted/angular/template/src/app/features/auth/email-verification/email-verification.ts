import { Component } from '@angular/core';
import { routes } from '../../../core/routes/routes';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-verification',
  imports: [FormsModule,RouterLink],
  templateUrl: './email-verification.html',
  styleUrl: './email-verification.scss',
})
export class EmailVerification {
AllRoutes = routes;
constructor(private router:Router){}
redirect():void{
  this.router.navigate([routes.otp])
}
}
