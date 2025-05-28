import {Routes} from '@angular/router';
import {ExperienciaComponent} from './pages/experiencia/experiencia.component';
import {HobbiesComponent} from './pages/hobbies/hobbies.component';
import {ProjetosComponent} from './pages/projetos/projetos.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {TecnologiasComponent} from './pages/tecnologias/tecnologias.component';

export const routes: Routes = [
  {
    path: '',
    component: SobreComponent,
    title: 'Lucas Dué - Sobre',
  },
  {
    path: 'experiencias',
    component: ExperienciaComponent,
    title: 'Lucas Dué - Experiência',
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
    title: 'Lucas Dué - Hobbies',
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
    title: 'Lucas Dué - Projetos',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Lucas Dué - Sobre',
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent,
    title: 'Lucas Dué - Tecnologias',
  },
  {
    path: '**',
    component: SobreComponent,
  },
];
