import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {CommonModule} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {PeriodoPipe} from '../../pipes/periodo.pipe';
import {DuracaoPipe} from '../../pipes/duracao.pipe';
import {EllipsisPipe} from '../../pipes/ellipsis.pipe';

@Component({
  selector: 'app-experiencia',
  imports: [Timeline, Card, Timeline, CommonModule, PrimeTemplate, PeriodoPipe, DuracaoPipe, EllipsisPipe],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  items = [
    {
      cor: '#FF6B6B',
      resumo: `Atualmente trabalho aqui em um modelo de cooperativa. Estou alocado no time de
desenvolvimento de seguros prestamista do Banco do Brasil. Na squad de front-end, eu
crio novos micro frontends, realizo manutenções, evoluções e também migrações da
primeira versão do Angular para versões mais recentes. Utilizamos repositórios de código
interno do BB e adotamos o gitflow.
É necessário passar por um longo processo de dev, testes e esteira de integração contínua e
várias etapas até gerar uma release em produção.
Além disso, analiso impactos de mudanças significativas, trabalho na melhoria de
performance e garanto uma cobertura de no mínimo 80% dos testes unitários.`,
      dataInicio: '03-10-2022',
      dataFim: '',
      cargo: 'Analista e Desenvolvedor III',
      logo: 'assets/logos/coopersystem.jpeg',
      empresa: 'CooperSystem',
      estado: 'Brasília, DF',
    },
    {
      cor: '#6BCB77',
      resumo: `Como prestador de serviços, com flexibilidade nas entregas e confiança ao longo dos anos,
trabalhei sozinho na criação do front-end de um sistema de gestão de NFEs voltado para
redes de farmácia.
Esse software continua evoluindo utilizando Angular e tem uma base interessante de
clientes que o utiliza. Aqui usamos o framework css primeng e outro framework chamado
devexpress, que possui uma poderosa e grande variedade de componentes de tabelas,
gráficos e elementos visuais.
Participo de diversos refinamentos técnicos para alinhamento do design e backend da
aplicação.`,
      dataInicio: '03-10-2021',
      dataFim: '',
      cargo: 'Desenvolvedor de Software',
      logo: 'assets/logos/egtec.jpeg',
      empresa: 'EGTEC',
      estado: 'Saquarema, RJ',
    },
    {
      cor: '#4D96FF',
      resumo: `Na BRQ fui alocado no time de desenvolvimento de front-end do novo Sistema de Gestão
de campanhas da Boticário (GCAM) utilizando React.js.
Colaborei também na manutenção do sistema legado feito em Angular js. Aqui também
realizávamos as cerimônias do SCRUM, com dailys diárias, plannings e reviews..`,
      dataInicio: '06-10-2021',
      dataFim: '02-22-2022',
      cargo: 'Analista de Sistemas SR',
      logo: 'assets/logos/brq.jpeg',
      empresa: 'BRQ',
    },
    {
      cor: '#FFD93D',
      resumo: `Na Digi, participei de umas correções em um sistema de delivery tipo IFOOD e evolução de
um e-commerce. Utilizamos Angular, Bootstrap e Material como ferramentas.`,
      dataInicio: '02-25-2021',
      dataFim: '05-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/digievo.jpeg',
      empresa: 'Digievo',
    },
    {
      cor: '#9D4EDD',
      resumo: `Aqui na ATM fui responsável por evoluir um sistema voltado para a área contábil. As
ferramentas foram Angular, NG Zorro e Bootstrap 4.`,
      dataInicio: '10-15-2020',
      dataFim: '02-22-2021',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/mastertax.jpeg',
      empresa: 'Maxtertax',
    },
    {
      cor: '#FF9F1C',
      resumo: `Na PFX tive a oportunidade de trabalhar em um sistema de automação de processos. A
ideia era permitir desenhar, modelar e automatizar graficamente os fluxos de processo dos
clientes. Utilizamos Angular e bootstrap e uma metodologia DDD.`,
      dataInicio: '01-10-2020',
      dataFim: '09-22-2020',
      cargo: 'Desenvolvedor Front-End',
      logo: 'assets/logos/pfx.png',
      empresa: 'Portal Flex LTDA',
    },
    {
      cor: '#2EC4B6',
      resumo: `No Hospital eu entrei como estagiário de TI, foi minha primeira experiência profissional.
Iniciei um aprendizado em desenvolvimento de software, e comecei a dar conta de
pequenas demandas que os ERPs do hospital não supriam. Isso utilizando JAVA, PHP e
Angular.
Tive a experiência de criar relatórios, dashboards, realizar transformações de dados
utilizando várias ferramentas, e principalmente de ser agente transformador de um setor de
TI onde não existia bem uma área para desenvolvimento de software. Tivemos papel muito
importante durante a pandemia da COVID construindo um painel de ocupação de leitos,
onde a gerência conseguiu acompanhar em tempo real o status de cada leito.`,
      dataInicio: '09-10-2017',
      dataFim: '08-22-2020',
      cargo: 'Desenvolvedor Fullstack',
      logo: 'assets/logos/hc.jpeg',
      empresa: 'Hospital do Cidade',
    }
  ];
}
