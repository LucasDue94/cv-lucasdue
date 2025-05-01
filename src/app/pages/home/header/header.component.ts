import {Component} from '@angular/core';
import {Button, ButtonModule} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly wppLink = `https://wa.me/558299825788?text=Olá%20Lucas,%20gostei%20do%20seu%20perfil%20e%20gostaria%20de%20entrar%20em%20contato%20para%20discutir%20uma%20oportunidade.%20Você%20tem%20interesse%20em%20conversar%20sobre%20uma%20posição?`;
  readonly linkedinLink = `https://www.linkedin.com/in/lucasdue/`

}
