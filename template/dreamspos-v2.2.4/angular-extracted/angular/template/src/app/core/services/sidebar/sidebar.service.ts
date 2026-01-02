import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideBar, SideBarMenu } from '../../models/model';
import { routes } from '../../routes/routes';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  AllRoutes = routes
    public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

    public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

    public sidebarData:SideBar[] = [
    {
      tittle: 'Main',
      icon: 'layout-dashboard',
      ids: 'dashboard',
      base:'dashboard',
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout-dashboard',
          base: 'index',
          subMenus: []
        },
        {
          menuValue: 'POS',
          route: routes.pos,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'combine',
          base: 'pos',
          subMenus: []
        },
        {
          menuValue: 'Orders',
          route: routes.orders,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'list-todo',
          base: 'orders',
          subMenus: []
        },
        {
          menuValue: 'Kitchen (KDS)',
          route: routes.kitchen,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'drumstick',
          base: 'kitchen',
          subMenus: []
        },
        {
          menuValue: 'Reservation',
          route: routes.reservations,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-clock',
          base: 'reservations',
          subMenus: []
        },
      ]
    },
    {
      tittle: 'MENU MANAGEMENT',
      icon: 'layers',
      ids: 'menu-management',
      base:'management',
      menu: [
        {
          menuValue: 'Categories',
          route: routes.categories,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layers',
          base: 'categories',
          subMenus: []
        },
        {
          menuValue: 'Items',
          route: routes.items,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout-list',
          base: 'items',
          subMenus: []
        },
        {
          menuValue: 'Addons',
          route: routes.addons,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'text-select',
          base: 'addons',
          subMenus: []
        },
        
        {
          menuValue: 'Coupons',
          route: routes.coupons,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'badge-percent',
          base: 'coupons',
          subMenus: []
        },
      ]
    },
    {
      tittle: 'OPERATIONS',
      icon: 'merge',
      ids: 'operations',
      base:'operation',
      menu: [
        {
          menuValue: 'Tables',
          route: routes.table,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'concierge-bell',
          base: 'table',
          subMenus: []
        },
        {
          menuValue: 'Customers',
          route: routes.customer,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-round',
          base: 'customer',
          subMenus: []
        },
        {
          menuValue: 'Invoices',
          route: routes.invoices,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-spreadsheet',
          base: 'invoices',
          subMenus: []
        },
        {
          menuValue: 'Payments',
          route: routes.payments,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'badge-dollar-sign',
          base: 'payments',
          subMenus: []
        },
      ]
    },
    {
      tittle: 'ADMINISTRATION',
      icon: 'user-cog',
      ids: 'administration',
      base:'administration',
      menu: [
        {
          menuValue: 'Users',
          route: routes.users,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users',
          base: 'users',
          subMenus: []
        },
        {
          menuValue: 'Permissions',
          route: routes.rolePermission,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'shield',
          base: 'role-permission',
          subMenus: []
        },
        {
          menuValue: 'Reports',
          route: routes.earningReport,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'file-spreadsheet',
          base: 'reports',
          subMenus: []
        },
      ]
    },
    {
      tittle: 'Pages',
      icon: 'library-big',
      ids: 'pages',
      menu: [
        {
          menuValue: 'Sign In',
          route: routes.login,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'lock-keyhole',
          base: 'auth',
          subMenus: []
        },
        {
          menuValue: 'Sign Up',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user-round-plus',
          base: 'auth',
          subMenus: []
        },
        {
          menuValue: 'Forgot Password',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'lock-keyhole-open',
          base: 'auth',
          subMenus: []
        },
        {
          menuValue: 'Email Verification',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'mail',
          base: 'auth',
          subMenus: []
        },
        {
          menuValue: 'Otp',
          route: routes.otp,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'blocks',
          base: 'auth',
          subMenus: []
        },
        {
          menuValue: 'Reset Password',
          route: routes.resetPassword,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'lock-keyhole',
          base: 'reset-password',
          subMenus: []
        },
      ]
    },
    {
      tittle: 'Settings',
      icon: 'cog',
      ids: 'settings',
      base:'settings',
      menu: [
        {
          menuValue: 'Store Settings',
          route: routes.storeSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'warehouse',
          base: 'store-settings',
          subMenus: []
        },
        {
          menuValue: 'Tax',
          route: routes.taxSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'diamond-percent',
          base: 'tax-settings',
          subMenus: []
        },
        {
          menuValue: 'Print',
          route: routes.printSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'printer',
          base: 'print-settings',
          subMenus: []
        },
        {
          menuValue: 'Payment Types',
          route: routes.paymentSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'circle-dollar-sign',
          base: 'payment-settings',
          subMenus: []
        },
        {
          menuValue: 'Delivery',
          route: routes.deliverySettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bike',
          base: 'delivery-settings',
          subMenus: []
        },
        {
          menuValue: 'Notifications',
          route: routes.notificationsSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bell',
          base: 'notifications-settings',
          subMenus: []
        },
        {
          menuValue: 'Integrations / API',
          route: routes.integrationsSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'pin',
          base: 'integrations-settings',
          subMenus: []
        },
      ]
    },
   
    ]
    public getSideBarData: BehaviorSubject<SideBar[]> = new BehaviorSubject<SideBar[]>(this.sidebarData);
  public resetData(): void {
    this.sidebarData.map((res: SideBar) => {
      res.menu.map((menus: SideBarMenu) => {
        menus.showSubRoute = false;
      });
    });
  }
}
