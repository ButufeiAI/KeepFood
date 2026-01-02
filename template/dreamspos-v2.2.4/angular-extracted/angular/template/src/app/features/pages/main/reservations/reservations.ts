import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {DatePicker} from 'primeng/datepicker'

@Component({
  selector: 'app-reservations',
  imports: [MatSelectModule,DatePicker,FormsModule],
  templateUrl: './reservations.html',
  styleUrl: './reservations.scss',
})
export class Reservations {
dates:string[]=[]
}
