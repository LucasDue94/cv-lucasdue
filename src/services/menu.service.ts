import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  currentMenu: BehaviorSubject<string> = new BehaviorSubject('Sobre');
  private readonly STORAGE_KEY = 'menu';

  constructor() {
    const menu = localStorage.getItem(this.STORAGE_KEY);
    if (menu) {
      this.setMenu(menu)
    }
  }

  setMenu(menu: string): void {
    localStorage.setItem(this.STORAGE_KEY, menu);
    this.currentMenu.next(menu)
  }

  getMenu(): Observable<string> {
    return this.currentMenu.asObservable()
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

}

