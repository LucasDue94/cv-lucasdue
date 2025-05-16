import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ExperienciaComponent} from './pages/experiencia/experiencia.component';
import {HobbiesComponent} from './pages/hobbies/hobbies.component';
import {ProjetosComponent} from './pages/projetos/projetos.component';
import {ResumoComponent} from './pages/resumo/resumo.component';
import {TecnologiasComponent} from './pages/tecnologias/tecnologias.component';

export const routes: Routes = [
  {
    path: '',
    component: ResumoComponent,
    title: 'Início',
  }, {
    path: 'experiencia',
    component: ExperienciaComponent,
    title: 'Experiência',
  }, {
    path: 'hobbies',
    component: HobbiesComponent,
    title: 'Hobbies',
  }, {
    path: 'projetos',
    component: ProjetosComponent,
    title: 'Projetos',
  }, {
    path: 'sobre',
    component: ResumoComponent,
    title: 'Sobre',
  }, {
    path: 'tecnologias',
    component: TecnologiasComponent,
    title: 'Tecnologias',
  },
  {
    path: '**',
    component: ResumoComponent,
  }
];
