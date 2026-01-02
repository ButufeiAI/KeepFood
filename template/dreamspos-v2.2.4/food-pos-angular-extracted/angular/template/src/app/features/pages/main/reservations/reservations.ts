import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {DatePicker} from 'primeng/datepicker'
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-reservations',
  imports: [MatSelectModule,DatePicker,FormsModule,SelectModule],
  templateUrl: './reservations.html',
  styleUrl: './reservations.scss',
})
export class Reservations {
dates:string[]=[]
customers: any[] | undefined;
selectedCustomers: string | undefined;
selectedCustomers2: string | undefined;
ngOnInit():void{
   this.customers = [
            { name: 'Select'},
            { name: 'Adrian Hawk ( +1 66898 98985 )'},
            { name: 'Adam Clark - +1 45474 21456'},
        ];
}
}
