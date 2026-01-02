import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerBootstrapDirective } from 'ngx-daterangepicker-bootstrap';
import dayjs, { Dayjs } from "dayjs";
@Component({
  selector: 'app-filter-daterangepicker',
  imports: [NgxDaterangepickerBootstrapDirective,FormsModule],
  templateUrl: './filter-daterangepicker.html',
  styleUrl: './filter-daterangepicker.scss',
})
export class FilterDaterangepicker {
bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  selected: {startDate: Dayjs, endDate: Dayjs} = {startDate: dayjs(), endDate: dayjs()};
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.selected = {startDate: dayjs(), endDate: dayjs()};
  }
  ngOnInit():void{
    document.body.classList.add('custom-filter-daterange')
  }
  ngOnDestroy():void{
    document.body.classList.remove('custom-filter-daterange')
  }
}
