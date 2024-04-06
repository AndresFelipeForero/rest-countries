import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeDark = new Subject<boolean>();

  constructor() {
  }

  themeToggle(themeStatus: boolean){
    this.themeDark.next(themeStatus)
  }

  
}
