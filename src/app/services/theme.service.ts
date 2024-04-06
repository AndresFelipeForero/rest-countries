import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeDark = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  themeToggle(themeStatus: boolean){
    this.themeDark.next(themeStatus)
  }
}
