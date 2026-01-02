import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { NavigationStart, Router, RouterModule ,Event as RouterEvent, NavigationEnd,} from '@angular/router';
import { TwoColSidebar } from '../../layouts/two-col-sidebar/two-col-sidebar';
import { Header } from '../../layouts/header/header';
import { SettingsService } from '../../core/services/settings/settings.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CommonService } from '../../core/services/common/common.service';
import { url } from '../../core/models/model';

@Component({
  selector: 'app-pages',
  imports: [RouterModule,TwoColSidebar,Header],
  templateUrl: './pages.html',
  styleUrl: './pages.scss',
})
export class Pages {
//Table Loader
loading = false;
public miniSidebar = false;
public expandMenu = false;
public mobileSidebar = false;
base ='';
page ='';
last ='';

@HostListener('window:resize')
onResize():void{
  if (window.innerWidth > 992) {
        this.miniSidebar = false;
        document.body.classList.remove('mini-sidebar')
        this.closeOverlay();
      }
    }
  constructor(private cdr:ChangeDetectorRef,
  private Router: Router,
    private settings: SettingsService,
    private sideBar: SidebarService,
    private common: CommonService,
){
     this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = true;
        document.documentElement.setAttribute('class','menu-opened')
        document.body.classList.add('mini-sidebar')
        document.body.classList.add('expand-menu')
        document.body.style.overflow='hidden'
      } else {
        this.mobileSidebar = false;
        document.documentElement.removeAttribute('class')
        document.body.classList.remove('mini-sidebar')
        document.body.classList.remove('expand-menu')
        document.body.style.overflow=''
      }
    });
    this.sideBar.expandSideBar.subscribe((res: boolean) => {
      this.expandMenu = res;
    });
    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.getRoutes(data);
      
      }
      if (data instanceof NavigationEnd) {
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = false;
      }
    });
    this.sideBar.sideBarPosition.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
        document.body.classList.add('mini-sidebar')
      } else {
        this.miniSidebar = false;
        document.body.classList.remove('mini-sidebar')
      }
    });
    this.getRoutes(this.Router);
    this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
      this.loading = false;
        setTimeout(() => {
          this.loading = true;
          this.cdr.detectChanges();
          }, 1000);
          document.body.style.overflow=''
      });
        
}
  private getRoutes(data: url): void {
    const splitVal = data.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
    this.common.baseRoute.next(splitVal[1]);
    this.common.pageRoute.next(splitVal[2]);
    this.common.lastRoute.next(splitVal[3]);
       
   
  }

closeOverlay():void{
  this.mobileSidebar=false;
  document.body.style.overflow=''
}
}
