import {Component, inject, OnInit} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {GaService} from '../services/ga.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cv-lucasdue';
  private gaService = inject(GaService)
  private router = inject(Router);

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.sendPageView(event.urlAfterRedirects);
      });
  }

  private sendPageView(url: string): void {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: url
      });
    }
  }
}
