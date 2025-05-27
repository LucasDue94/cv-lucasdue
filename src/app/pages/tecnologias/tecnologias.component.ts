import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {PageComponent} from '../../components/page/page.component';

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule, Rating, FormsModule, PageComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss',
})
export class TecnologiasComponent {
  techCategories = [
    {
      title: 'Linguagens',
      items: [
        {name: 'TypeScript', rating: 5},
        {name: 'JavaScript', rating: 5},
        {name: 'HTML', rating: 5},
        {name: 'CSS', rating: 5},
        {name: 'Java', rating: 2},
        {name: 'PHP', rating: 2},
      ]
    },
    {
      title: 'Frameworks CSS',
      items: [
        {name: 'PrimeNG', rating: 5},
        {name: 'Bootstrap', rating: 4},
        {name: 'Material', rating: 4},
        {name: 'Tailwind', rating: 3},
      ]
    },
    {
      title: 'Frameworks Front-end',
      items: [
        {name: 'Angular', rating: 5},
        {name: 'React.js', rating: 3},
      ]
    },
    {
      title: 'Back-end',
      items: [
        {name: 'Node.js', rating: 3},
        {name: 'Mysql', rating: 2},
        {name: 'Postgres', rating: 2},
        {name: 'MongoDB', rating: 2},
      ]
    },
    {
      title: 'DevOps',
      items: [
        {name: 'Git', rating: 4},
        {name: 'CI/CD', rating: 3},
        {name: 'Docker', rating: 3},
      ]
    },
    {
      title: 'Bibliotecas',
      items: [
        {name: 'DevExtreme', rating: 5},
        {name: 'RxJS', rating: 4},
        {name: 'NG Zorro', rating: 2}
      ]
    },
    {
      title: 'Testes',
      items: [
        {name: 'Jasmine', rating: 4},
        {name: 'Karma', rating: 4}
      ]
    }, {
      title: 'Metodologias e Processos',
      items: [
        {name: 'Scrum', rating: 5},
        {name: 'Kanban', rating: 5}
      ]
    },
    {
      title: 'Outras tecnologias relevantes',
      items: [
        {name: 'Slack', rating: 5},
        {name: 'Teams', rating: 5},
        {name: 'Trello', rating: 4},
        {name: 'REST APIs', rating: 4},
        {name: 'ESLint', rating: 4},
        {name: 'Prettier', rating: 4},
        {name: 'Postman', rating: 3},
        {name: 'OAuth / JWT', rating: 3},
        {name: 'Storybook', rating: 3},
        {name: 'Jira', rating: 3},
        {name: 'AWS', rating: 2},
      ]
    }
  ]
  urlBackground = 'assets/images/tecnologias.png';
  resumo = `Antes de qualquer coisa, é preciso ressaltar que, como desenvolvedor, crio soluções, entrego valor
      por onde passo e aprendo à medida que me é exigido. Sou mais habilidoso com Front-End, mas também possuo
      conhecimento em Back-End, bancos de dados e um pouco de DevOps. O mundo da tecnologia é um oceano, não é possível
      ter domínio absoluto de todas as tecnologias, até porque, todo dia surge uma nova. O primordial é ter vontade de
      aprender e
      solucionar problemas reais.`;
}
