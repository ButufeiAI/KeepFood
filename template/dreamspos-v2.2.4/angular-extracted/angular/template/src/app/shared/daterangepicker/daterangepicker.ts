import { Component } from '@angular/core';
import { NgxDaterangepickerBootstrapDirective } from "ngx-daterangepicker-bootstrap";
import dayjs, { Dayjs } from "dayjs";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-daterangepicker',
  imports: [NgxDaterangepickerBootstrapDirective,FormsModule],
  templateUrl: './daterangepicker.html',
  styleUrl: './daterangepicker.scss',
})
export class Daterangepicker {
bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  selected: {startDate: Dayjs, endDate: Dayjs} = {startDate: dayjs(), endDate: dayjs()};
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.selected = {startDate: dayjs(), endDate: dayjs()};
  }
}
