import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../../../core/routes/routes';

@Component({
  selector: 'app-audit-report',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './audit-report.html',
  styleUrl: './audit-report.scss',
})
export class AuditReport {
AllRoutes = routes
}
