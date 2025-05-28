import {Component, inject} from '@angular/core';
import {GaService} from '../../../services/ga.service';
import {GaEventsEnum} from '../../../enums/ga-events.enum';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  gaService = inject(GaService)

  download() {
    this.gaService.sendEvent(GaEventsEnum.DOWNLOAD, {
      event_category: 'Arquivo',
      event_label: 'cv-lucasdue.pdf'
    });
  }
}
