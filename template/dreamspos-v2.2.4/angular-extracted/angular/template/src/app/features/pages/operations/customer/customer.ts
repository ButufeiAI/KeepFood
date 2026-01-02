import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-customer',
  imports: [MatSelectModule,DatePickerModule,FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer {
dates:string[]=[]
}
