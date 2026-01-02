import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../core/routes/routes';

@Component({
  selector: 'app-invoice-details',
  imports: [RouterLink],
  templateUrl: './invoice-details.html',
  styleUrl: './invoice-details.scss',
})
export class InvoiceDetails {
AllRoutes = routes;
}
