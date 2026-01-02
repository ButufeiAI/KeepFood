import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
export const PAGES_ROUTES: Routes = [

  { path: '', canMatch: [AuthGuard], loadComponent: () => import('./pages').then(m => m.Pages),
    children: [
      //Main
      { path: 'index', loadComponent: () => import('./main/dashboard/dashboard').then(m => m.Dashboard)},
      { path: 'orders', loadComponent: () => import('./main/orders/orders').then(m => m.Orders)},
      { path: 'kanban-view', loadComponent: () => import('./main/kanban-view/kanban-view').then(m => m.KanbanView)},
      { path: 'kitchen', loadComponent: () => import('./main/kitchen/kitchen').then(m => m.Kitchen)},
      { path: 'reservations', loadComponent: () => import('./main/reservations/reservations').then(m => m.Reservations)},
      { path: 'pos', loadComponent: () => import('./main/pos/pos').then(m => m.Pos)},

      //MENU MANAGEMENT
      { path: 'coupons', loadComponent: () => import('./menu-management/coupons/coupons').then(m => m.Coupons)},
      { path: 'categories', loadComponent: () => import('./menu-management/categories/categories').then(m => m.Categories)},
      { path: 'items', loadComponent: () => import('./menu-management/items/items').then(m => m.Items)},
      { path: 'addons', loadComponent: () => import('./menu-management/addons/addons').then(m => m.Addons)},

      //Operations
      { path: 'table', loadComponent: () => import('./operations/table/table').then(m => m.Table)},
      { path: 'customer', loadComponent: () => import('./operations/customer/customer').then(m => m.Customer)},
      { path: 'invoices', loadComponent: () => import('./operations/invoices/invoices').then(m => m.Invoices)},
      { path: 'invoice-details', loadComponent: () => import('./operations/invoice-details/invoice-details').then(m => m.InvoiceDetails)},
      { path: 'payments', loadComponent: () => import('./operations/payments/payments').then(m => m.Payments)},
      
      //Administration
      { path: 'users', loadComponent: () => import('./administration/users/users').then(m => m.Users)},
      { path: 'role-permission', loadComponent: () => import('./administration/role-permission/role-permission').then(m => m.RolePermission)},
      { path: 'earning-report', loadComponent: () => import('./administration/reports/earning-report/earning-report').then(m => m.EarningReport)},
      { path: 'order-report', loadComponent: () => import('./administration/reports/order-report/order-report').then(m => m.OrderReport)},
      { path: 'sales-report', loadComponent: () => import('./administration/reports/sales-report/sales-report').then(m => m.SalesReport)},
      { path: 'customer-report', loadComponent: () => import('./administration/reports/customer-report/customer-report').then(m => m.CustomerReport)},
      { path: 'audit-report', loadComponent: () => import('./administration/reports/audit-report/audit-report').then(m => m.AuditReport)},

      //Settings
      { path: 'store-settings', loadComponent: () => import('./settings/store-settings/store-settings').then(m => m.StoreSettings)},
      { path: 'tax-settings', loadComponent: () => import('./settings/tax-settings/tax-settings').then(m => m.TaxSettings)},
      { path: 'print-settings', loadComponent: () => import('./settings/print-settings/print-settings').then(m => m.PrintSettings)},
      { path: 'payment-settings', loadComponent: () => import('./settings/payment-settings/payment-settings').then(m => m.PaymentSettings)},
      { path: 'integrations-settings', loadComponent: () => import('./settings/integrations-settings/integrations-settings').then(m => m.IntegrationsSettings)},
      { path: 'notifications-settings', loadComponent: () => import('./settings/notifications-settings/notifications-settings').then(m => m.NotificationsSettings)},
      { path: 'delivery-settings', loadComponent: () => import('./settings/delivery-settings/delivery-settings').then(m => m.DeliverySettings)},

    ],
  },

  // ANY invalid route goes to login
  
];
