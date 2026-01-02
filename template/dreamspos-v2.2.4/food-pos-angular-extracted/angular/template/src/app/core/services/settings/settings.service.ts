import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {

    private renderer: Renderer2;
    base = '';
    page = '';
    last = '';

      // Theme Color
    public themeColor: BehaviorSubject<string> = new BehaviorSubject<string>(
      localStorage.getItem('themeColor') || 'light'
    );

      constructor(rendererFactory: RendererFactory2,private common: CommonService) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
    });
    this.common.pageRoute.subscribe((res: string) => {
      this.page = res;
    });
    this.common.lastRoute.subscribe((res: string) => {
      this.last = res;
    });
  }
    public changeThemeColor(themeColor: string): void {
    this.themeColor.next(themeColor);
    localStorage.setItem('themeColor', themeColor);
    this.renderer.setAttribute(
      document.documentElement,
      'data-bs-theme',
      themeColor
    );
  }
toggleTheme(): void {
  const currentTheme = this.themeColor.getValue();

  if (currentTheme === 'light') {
    this.changeThemeColor('dark');
  } else {
    this.changeThemeColor('light');
  }
}
}
