import {Component} from '@angular/core';
import {PageComponent} from '../../components/page/page.component';

@Component({
  selector: 'app-resumo',
  imports: [
    PageComponent
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  resumo = `<p>
      Sou desenvolvedor com experiência em diferentes tecnologias e projetos, atuando desde a
      arquitetura, planejamento, design, até a execução. Tenho mais familiaridade com Angular,
      TypeScript e Node.js. Mas isso não quer dizer que não posso aprender algo novo.
    </p>
    <p>
      Gosto de ser direto e prezar pela qualidade nas entregas. Ainda assim, entendo que em alguns
      momentos é preciso priorizar o prazo, desde que não comprometa o resultado final e tenha
      espaço para melhorias futuras.
    </p>
    <p>
      Sou cristão e tenho valores que carrego comigo em todas as áreas da vida. Aprendo bastante
      observando e ouvindo com atenção. Vejo as críticas como parte essencial do crescimento.
    </p>`;
  urlBackground = '/assets/images/resumo.png';
}
