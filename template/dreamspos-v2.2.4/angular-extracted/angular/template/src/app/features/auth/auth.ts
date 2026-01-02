import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsService } from '../../core/services/settings/settings.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
})
export class Auth {
  constructor(private settings:SettingsService){}
  ngOnInit(): void {
    document.body.classList.add('bg-white');
    this.settings.changeThemeColor('light');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-white');
  }
}
