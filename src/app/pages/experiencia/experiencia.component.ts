import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { Card } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-experiencia',
  imports: [Timeline, Card, Timeline, CommonModule, PrimeTemplate],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  items = [
    {
      cor: '#FF6B6B',
      resumo:
        ' Atualmente trabalho aqui em um modelo de cooperativa. Estou alocado no time de\n' +
        '          desenvolvimento de seguros prestamista do Banco do Brasil. Na squad de front-end, eu\n' +
        '          crio novos micro frontends, realizo manutenções, evoluções e também migrações da\n' +
        '          primeira versão do Angular para versões mais recentes. Utilizamos repositórios de código\n' +
        '          interno do BB e adotamos o gitflow.\n' +
        '          É necessário passar por um longo processo de dev, testes e esteira de integração contínua e\n' +
        '          várias etapas até gerar uma release em produção.\n' +
        '          Além disso, analiso impactos de mudanças significativas, trabalho na melhoria de\n' +
        '          performance e garanto uma cobertura de 80% de testes unitários exigidos pelo Banco do\n' +
        '          Brasil.',
      periodo: '01-05-2025',
      cargo: 'Analista e Desenvolvedor III',
      logo: 'assets/logos/coopersystem.jpeg',
      empresa: 'CooperSystem',
      estado: 'Brasília, DF',
    },
    {
      cor: '#6BCB77',
      resumo: 'pi pi-briefcase',
      periodo: '22-04-2025',
      cargo: 'Desenvolvedor de Software',
      logo: 'assets/logos/egtec.jpeg',
      empresa: 'EGTEC',
      estado: 'Saquarema, RJ',
    },
    {
      cor: '#4D96FF',
      resumo: 'pi pi-calendar',
      periodo: '03-05-2025',
      cargo: 'Analista de Sistemas SR',
      logo: 'assets/logos/brq.jpeg',
      empresa: 'BRQ',
    },
    {
      cor: '#FFD93D',
      resumo: 'pi pi-camera',
      periodo: '18-03-2025',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/digievo.jpeg',
      empresa: 'Digievo',
    },
    {
      cor: '#9D4EDD',
      resumo: 'pi pi-shopping-cart',
      periodo: '02-05-2025',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/mastertax.jpeg',
      empresa: 'Maxtertax',
    },
    {
      cor: '#FF9F1C',
      resumo: 'pi pi-clock',
      periodo: '10-04-2025',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/pfx.png',
      empresa: 'Portal Flex LTDA',
    },
    {
      cor: '#2EC4B6',
      resumo: 'pi pi-envelope',
      periodo: '04-05-2025',
      cargo: 'Desenvolvedor Fullstack',
      logo: 'assets/logos/hc.jpeg',
      empresa: 'Hospital do Cidade',
    },
    {
      cor: '#2EC4B6',
      resumo: 'pi pi-envelope',
      periodo: '04-05-2025',
      cargo: 'Estagiário',
      logo: 'assets/logos/hc.jpeg',
      empresa: 'Hospital do Cidade',
    },
  ];
}
