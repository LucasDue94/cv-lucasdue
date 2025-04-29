import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Currículo de Lucas Due');
    this.meta.addTags([
      { name: 'description', content: 'Desenvolvedor Front-End com experiência em Angular e foco em performance e design limpo.' },
      { name: 'author', content: 'Lucas Due' },
      { property: 'og:title', content: 'Lucas Due - Desenvolvedor Front-End' },
      { property: 'og:description', content: 'Currículo online com experiências, habilidades e projetos de Lucas Due.' },
      { property: 'og:image', content: 'https://lucasdue.com.br/assets/curriculo-preview.png' },
      { property: 'og:url', content: 'https://lucasdue.com.br' },
    ]);
  }
}
