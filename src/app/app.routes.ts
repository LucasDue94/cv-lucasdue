import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

export const routes: Routes = [
  {
    path: '',
    component: SobreComponent,
    title: 'Início',
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent,
    title: 'Experiência',
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
    title: 'Hobbies',
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
    title: 'Projetos',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Sobre',
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent,
    title: 'Tecnologias',
  },
  {
    path: '**',
    component: SobreComponent,
  },
];
