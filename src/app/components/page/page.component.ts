import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  @Input() resumo = '';
  @Input() urlBackground = ''
  @Input() titulo = '';

  get backgroundImage(): string {
    return this.urlBackground
      ? `linear-gradient(rgba(30, 60, 52, 0.8), rgba(30, 60, 52, 0.8)), url('${this.urlBackground}')`
      : '';
  }
}
