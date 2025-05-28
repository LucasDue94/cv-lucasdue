import {Injectable} from '@angular/core';
import {GaEventsEnum} from '../enums/ga-events.enum';
import {GaEventParam} from '../models/ga-event-param';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor() {
  }

  public initializeGA(trackingId: string): void {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);
  }

  public sendEvent(event: GaEventsEnum, params: GaEventParam = {}): void {
    if (typeof gtag === 'function') {
      gtag('event', event, params);
    }
  }
}

