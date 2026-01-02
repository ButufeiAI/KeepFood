import { Component } from '@angular/core';
import { SideBar, SideBarMenu } from '../../core/models/model';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data/data.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CommonService } from '../../core/services/common/common.service';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { routes } from '../../core/routes/routes';

@Component({
  selector: 'app-two-col-sidebar',
  imports: [CommonModule, RouterLink,NgScrollbarModule],
  templateUrl: './two-col-sidebar.html',
  styleUrl: './two-col-sidebar.scss',
})
export class TwoColSidebar {
  AllRoutes = routes
  base = '';
  page = '';
  last = '';
  common_path = '';
  common_path2 = '';
  sidebarData: SideBar[] = [];
  constructor(
    public router: Router,
    private data: DataService,
    private sideBar: SidebarService,
    private common: CommonService
  ) {
    this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
        if (this.base == 'index' || this.base == 'orders' || this.base == 'kitchen' || this.base == 'reservations' || this.base == 'kanban-view') {
        this.common_path = 'dashboard';
      }
      if ( this.base == 'addons' || this.base == 'items' || this.base == 'categories' || this.base == 'coupons' ) {
        this.common_path = 'management';
      }
      if ( this.base == 'table' || this.base == 'customer' || this.base == 'invoices' || this.base == 'invoice-details' || this.base == 'payments') {
        this.common_path = 'operation';
      }
      if ( this.base == 'users' || this.base == 'role-permission' || this.base == 'earning-report' || this.base == 'order-report'
        || this.base == 'customer-report' || this.base == 'sales-report' || this.base == 'audit-report'
      ) {
        this.common_path = 'administration';
      }
      if ( this.base === 'store-settings' || this.base == 'print-settings' || this.base == 'tax-settings' || this.base == 'payment-settings'
        || this.base == 'notifications-settings' || this.base == 'integrations-settings'
      ) {
        this.common_path = 'settings';
        console.log(this.common_path)
      }
      if ( this.base == 'earning-report' || this.base == 'order-report'
        || this.base == 'customer-report' || this.base == 'sales-report' || this.base == 'audit-report'
      ) {
        this.common_path2 = 'reports';
      }
      if(this.base == 'orders' || this.base == 'kanban-view'){
        this.common_path2 = 'orders'
      }
      if(this.base == 'invoices' || this.base == 'invoice-details'){
        this.common_path2 = 'invoices'
      }
    });

    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        const splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
      
    
    }
    });
    // get sidebar data as observable because data is controlled for design to expand submenus
    this.sideBar.getSideBarData.subscribe((res: SideBar[]) => {
      res.forEach((item: SideBar) => {
        this.sidebarData.push(item);
      });
    });
  }
    public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
      const miniside = document.body.classList.contains('mini-sidebar');
      if(miniside){
        document.body.classList.add('expand-menu')
      }
    } else {
      this.sideBar.expandSideBar.next(false);
      document.body.classList.remove('expand-menu')
    }
  }
    public toggleSidebar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  closeSidebar():void{
    this.sideBar.toggleMobileSideBar.next('false');
  }
}
