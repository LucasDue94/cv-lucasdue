import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
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
    private title: Title,
    private meta: Meta,
  ) {
    this.title.setTitle('Currículo de Lucas Due');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Desenvolvedor Front-End com experiência em Angular e foco em performance e design limpo.',
      },
      {name: 'author', content: 'Lucas Due'},
      {property: 'og:title', content: 'Lucas Due - Desenvolvedor Front-End'},
      {
        property: 'og:description',
        content: 'Currículo online com experiências, habilidades e projetos de Lucas Due.',
      },
      {property: 'og:image', content: 'https://lucasdue.com.br/assets/curriculo-preview.png'},
      {property: 'og:url', content: 'https://lucasdue.com.br'},
    ]);
  }
}
