import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {CommonModule} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {PeriodoPipe} from '../../pipes/periodo.pipe';
import {DuracaoPipe} from '../../pipes/duracao.pipe';

@Component({
  selector: 'app-experiencia',
  imports: [Timeline, Card, Timeline, CommonModule, PrimeTemplate, PeriodoPipe, DuracaoPipe],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  items = [
    {
      cor: '#FF6B6B',
      resumo: `Aqui atuo no desenvolvimento de soluções para seguros prestamistas do Banco do Brasil. Crio e mantenho micro frontends em Angular e participo ativamente das migrações para versões mais atuais. Me envolvo nas decisões técnicas, no apoio a PMs e POs, além da navegação e usabilidade. É um ambiente que exige atenção aos detalhes, na performance e qualidade. Gosto dos desafios técnicos que aparecem e de enxergar o valor da minha entrega para o Banco do Brasil.`,
      dataInicio: '03-10-2022',
      dataFim: '',
      cargo: 'Analista e Desenvolvedor III',
      logo: 'assets/logos/coopersystem.png',
      empresa: 'CooperSystem',
      estado: 'Brasília, DF',
    },
    {
      cor: '#6BCB77',
      resumo: `Tenho muito orgulho desse projeto! Desenvolvo sozinho o front-end de um sistema de gestão de NFEs usado por redes de farmácia. O sistema segue evoluindo e ajudando várias empresas, o que me motiva bastante. É um espaço onde consigo aplicar minhas ideias com bastante liberdade e responsabilidade.`,
      dataInicio: '03-10-2021',
      dataFim: '',
      cargo: 'Desenvolvedor Front-End SR',
      logo: 'assets/logos/egtec.png',
      empresa: 'EGTEC',
      estado: 'Saquarema, RJ',
    },
    {
      cor: '#4D96FF',
      resumo: `Foi uma experiência muito bacana trabalhando no time que modernizou o sistema de gestão de campanhas do Grupo Boticário. Além de desenvolver com React.js, também ajudei na manutenção do sistema legado em AngularJS, garantindo que a transição fosse tranquila e segura.`,
      dataInicio: '06-10-2021',
      dataFim: '02-22-2022',
      cargo: 'Analista de Sistemas SR',
      logo: 'assets/logos/brq.jpeg',
      empresa: 'BRQ',
      estado: 'Curitiba, PR',

    },
    {
      cor: '#FFD93D',
      resumo: `Participei de melhorias em um sistema de delivery, além de evoluir um e-commerce. Foi uma passagem rápida, mas onde pude contribuir com soluções práticas, trabalhando com Angular e Bootstrap.`,
      dataInicio: '02-25-2021',
      dataFim: '05-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/digievo.jpeg',
      empresa: 'Digievo',
      estado: 'São Paulo, Sp',
    },
    {
      cor: '#9D4EDD',
      resumo: `Aqui ajudei a evoluir um sistema voltado para a área contábil. Tive a oportunidade de propor melhorias e entregar novas funcionalidades, sempre com foco na qualidade e na experiência do usuário.`,
      dataInicio: '10-15-2020',
      dataFim: '02-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/mastertax.jpeg',
      empresa: 'Maxtertax',
      estado: 'São Paulo, SP',
    },
    {
      cor: '#FF9F1C',
      resumo: `Esse foi um projeto bem interessante! Trabalhei no desenvolvimento de um sistema que permite automatizar graficamente os processos dos clientes. Foi um desafio aplicar conceitos de DDD e criar soluções visuais eficientes com Angular.`,
      dataInicio: '01-10-2020',
      dataFim: '09-22-2020',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/pfx.png',
      empresa: 'Portal Flex LTDA',
      estado: 'Florianópolis, SC',
    },
    {
      cor: '#2EC4B6',
      resumo: `Minha primeira experiência profissional! Entrei como estagiário e, aos poucos, fui ganhando confiança e desenvolvendo soluções que os sistemas do hospital não ofereciam. Um dos momentos mais marcantes foi criar, junto com o time, um painel de ocupação de leitos que foi fundamental durante a pandemia. Foi ali que descobri meu gosto por resolver problemas com tecnologia.`,
      dataInicio: '09-10-2017',
      dataFim: '08-22-2020',
      cargo: 'Desenvolvedor Fullstack',
      logo: 'assets/logos/hc.png',
      empresa: 'Hospital do Cidade',
      estado: 'Maceió, AL',

    }
  ];
}
