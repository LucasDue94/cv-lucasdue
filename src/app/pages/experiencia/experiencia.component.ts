import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {CommonModule} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {PeriodoPipe} from '../../pipes/periodo.pipe';
import {DuracaoPipe} from '../../pipes/duracao.pipe';
import {PageComponent} from '../../components/page/page.component';

@Component({
  selector: 'app-experiencia',
  imports: [Timeline, Card, Timeline, CommonModule, PrimeTemplate, PeriodoPipe, DuracaoPipe, PageComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  items = [
    {
      cor: '#FF6B6B',
      resumo: `<p>Na cooper, atuo no desenvolvimento de soluções para seguros prestamistas do Banco do Brasil. Crio e mantenho micro frontends em Angular.</p>
               <p>Um dos grandes desafios enfrentados foi migrar aplicações AngularJs para versões mais recentes.</p>
               <p>Constantemente sou envolvido nas decisões técnicas, no apoio a PMs e POs, além de decisões sobre navegação e usabilidade. </p>
               <p>É um ambiente que exige bastante atenção aos detalhes, principalmente nas integrações com as apis, na performance e qualidade.</p>
               <p >Gosto dos desafios técnicos que aparecem e de enxergar o valor da minha entrega para o Banco do Brasil.</p>`,
      dataInicio: '03-10-2022',
      dataFim: '',
      cargo: 'Analista e Desenvolvedor III',
      logo: 'assets/logos/coopersystem.png',
      empresa: 'CooperSystem',
      estado: 'Brasília, DF',
    },
    {
      cor: '#6BCB77',
      resumo: `<p>Na EGTEC desenvolvi sozinho o front-end de um sistema de gestão de NFEs usado por redes de farmácia. Tenho bastante orgulho deste projeto!</p>
               <p>Foi uma das poucas vezes que fui do zero ao deploy de um projeto desse tamanho em produção. Na maioria das vezes já peguei o bonde andando nos mais variados projetos em que já trabalhei.</p>
               <p>O sistema segue evoluindo e ajudando várias empresas em sua gestão de notas, na análise de compras e outras várias áreas.</p>
               <p>A EGTEC me deu espaço onde consegui colocar minhas ideias com bastante liberdade e responsabilidade.</p>`,
      dataInicio: '03-10-2021',
      dataFim: '',
      cargo: 'Desenvolvedor Front-End SR',
      logo: 'assets/logos/egtec.png',
      empresa: 'EGTEC',
      estado: 'Saquarema, RJ',
    },
    {
      cor: '#4D96FF',
      resumo: ` <p>Foi uma experiência bem legal trabalhar no time que modernizou o sistema de gestão de campanhas do Grupo Boticário. </p>
                <p>Além de desenvolver com React.js, também ajudei na manutenção do sistema legado em AngularJS, sendo ponte nessa transição entre os sistemas.</p>`,
      dataInicio: '06-10-2021',
      dataFim: '02-22-2022',
      cargo: 'Analista de Sistemas SR',
      logo: 'assets/logos/brq.jpeg',
      empresa: 'BRQ',
      estado: 'Curitiba, PR',

    },
    {
      cor: '#FFD93D',
      resumo: ` <p>Participei de melhorias em um sistema de delivery, além de evoluir um e-commerce. </p>
                <p>Foi uma passagem rápida, mas onde pude contribuir com soluções práticas e agregando valor ao negócio com as novas features.</p>
                <p> Aqui teve um desafio interessante que foi trabalhar com o conceito de filas no front-end. Já que o sistema é multiplataforma (mobile e web) e precisava dos dados em tempo real. </p>`,
      dataInicio: '02-25-2021',
      dataFim: '05-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/digievo.jpeg',
      empresa: 'Digievo',
      estado: 'São Paulo, Sp',
    },
    {
      cor: '#9D4EDD',
      resumo: ` <p>Ajudei a evoluir um sistema voltado para a área contábil. </p>
               <p>Tive a oportunidade de propor melhorias e entregar novas funcionalidades, sempre com foco na qualidade e na experiência do usuário.</p>`,
      dataInicio: '10-15-2020',
      dataFim: '02-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/mastertax.jpeg',
      empresa: 'Maxtertax',
      estado: 'São Paulo, SP',
    },
    {
      cor: '#FF9F1C',
      resumo: ` <p>Esse foi um projeto bem interessante! Trabalhei no desenvolvimento de um sistema que permite automatizar graficamente os processos dos clientes. </p>
                <p>Foi um desafio criar e manter soluções visuais eficientes com Angular e BMPN.</p>`,
      dataInicio: '01-10-2020',
      dataFim: '09-22-2020',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/pfx.png',
      empresa: 'Portal Flex LTDA',
      estado: 'Florianópolis, SC',
    },
    {
      cor: '#2EC4B6',
      resumo: `<p>Minha primeira experiência profissional! Entrei como estagiário e, aos poucos, fui ganhando confiança e desenvolvendo soluções que os sistemas do hospital não ofereciam. </p>
               <p>Um dos momentos mais marcantes foi criar, junto com o time, um painel de ocupação de leitos que foi fundamental durante a pandemia.</p>
               <p>Foi ali que descobri meu gosto por resolver problemas com tecnologia.</p>`,
      dataInicio: '09-10-2017',
      dataFim: '08-22-2020',
      cargo: 'Desenvolvedor Fullstack',
      logo: 'assets/logos/hc.png',
      empresa: 'Hospital do Cidade',
      estado: 'Maceió, AL',

    }
  ];
  resumo = `<p> Em todas as minhas experiências, sempre estive envolvido com metodologias ágeis, Gitflow, integração e entrega contínua. </p>
                   <p> Gosto de trabalhar em equipe, contribuir com boas práticas e me desafiar tecnicamente, buscando evoluir a cada projeto. Aprender algo novo é sempre bem vindo.</p>`
  urlBackground = `assets/images/experiencia.png`
}
