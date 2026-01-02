import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationEnd, NavigationStart, Router, Event } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('template');
  public base = '';
  public page = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.base =URL[1] ? URL[1].replaceAll('-',' '): '';
        this.page = URL[2] ? URL[2].replace('-',' '): '';
      }
       if(this.base === 'index'){
        this.page = 'Admin Dashboard'
      }
      // if(){
      //   this.page = this.base
      // }
      
    });
  }
}
