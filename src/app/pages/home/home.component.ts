import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {ContentComponent} from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private meta: Meta,
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Desenvolvedor Front-End com experiência em Angular , node.js e typescript.',
      },
      {name: 'author', content: 'Lucas Dué'},
      {property: 'og:title', content: 'Lucas Dué - Desenvolvedor Front-End'},
      {
        property: 'og:description',
        content: 'Currículo online com experiências, habilidades e projetos de Lucas Dué.',
      },
      {property: 'og:url', content: 'https://lucasdue.com.br'},
    ]);
  }
}
