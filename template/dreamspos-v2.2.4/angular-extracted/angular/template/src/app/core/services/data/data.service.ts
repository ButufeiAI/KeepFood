import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResultFormat } from '../../models/model';
import { map } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
   constructor(private http: HttpClient, private router: Router) {}


   //Json Datas
   public getAddons() {
    return this.http.get<apiResultFormat>('assets/json/addons.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
   public getCoupons() {
    return this.http.get<apiResultFormat>('assets/json/coupons.json');
  }
   public getCategories() {
    return this.http.get<apiResultFormat>('assets/json/categories.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoice() {
    return this.http.get<apiResultFormat>('assets/json/invoices.json');
  }
  public getPayment() {
    return this.http.get<apiResultFormat>('assets/json/payments.json');
  }
  public getUsers() {
    return this.http.get<apiResultFormat>('assets/json/users.json');
  }
  public getEarningReport() {
    return this.http.get<apiResultFormat>('assets/json/earningReport.json');
  }
  public getSalesReport() {
    return this.http.get<apiResultFormat>('assets/json/salesReport.json');
  }
  public getCustomerReport() {
    return this.http.get<apiResultFormat>('assets/json/customerReport.json');
  }
  public getOrderReport() {
    return this.http.get<apiResultFormat>('assets/json/orderReport.json');
  }
}
