import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    RouterLink,
    Menu
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly wppLink = `https://wa.me/5582999825788?text=Olá%20Lucas,%20gostei%20do%20seu%20perfil%20e%20gostaria%20de%20entrar%20em%20contato%20para%20discutir%20uma%20oportunidade.%20Você%20tem%20interesse%20em%20conversar%20sobre%20uma%20posição?`;
  readonly linkedinLink = `https://www.linkedin.com/in/lucasdue/`
  items: MenuItem[] = [{
    label: 'Sobre',
    url: `sobre`,
  }, {
    label: 'Experiência',
    url: `experiencia`,
  }, {
    label: 'Tecnologias',
    url: `tecnologias`,
  },
    {
      label: 'Projetos',
      url: `projetos`,
    }, {
      label: 'Hobbies',
      url: `hobbies`,
    },
  ]
}
