import { Component } from '@angular/core';
import { SettingsService } from '../../core/services/settings/settings.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CommonService } from '../../core/services/common/common.service';
import { routes } from '../../core/routes/routes';
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  AllRoutes = routes
base ='';
  themeColor = 'light'
  constructor(
    public settings:SettingsService,
    private sideBar:SidebarService,
    private common : CommonService
  ){
      this.settings.themeColor.subscribe((res: string) => {
      this.themeColor = res;
    });
this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
      });
  
}
  public togglesMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
ngOnInit():void{
   const themeColor = localStorage.getItem('themeColor') || 'light';
   this.settings.changeThemeColor(themeColor);
}
}
