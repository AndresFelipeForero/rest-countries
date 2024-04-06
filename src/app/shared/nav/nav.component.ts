import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  _themeService = inject(ThemeService)
  darkTheme = false

  onClickTheme(){
    this.darkTheme = !this.darkTheme
    this._themeService.themeToggle(this.darkTheme)
  }
}
