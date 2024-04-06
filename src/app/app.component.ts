import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SpinnerComponent, AsyncPipe, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rest-countries';
  _spinnerService = inject(SpinnerService)
  isLoading$ = this._spinnerService.isLoading$
  _themeService = inject(ThemeService)
  darkTheme: Observable<boolean> = this._themeService.themeDark;
}
