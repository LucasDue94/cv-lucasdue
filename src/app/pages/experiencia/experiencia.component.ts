import { Component } from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {ScrollPanel} from 'primeng/scrollpanel';

@Component({
  selector: 'app-experiencia',
  imports: [
    Timeline,
    Card,
    Button,
    Timeline,
    CommonModule,
    ScrollPanel,
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  items = [
    {
      color: '#FF6B6B',
      icon: 'pi pi-user',
      date: '01-05-2025',
      name: 'Maria Fernandes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      company: 'Microsoft'
    },
    {
      color: '#6BCB77',
      icon: 'pi pi-briefcase',
      date: '22-04-2025',
      name: 'Carlos Ribeiro',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      company: 'Apple'
    },
    {
      color: '#4D96FF',
      icon: 'pi pi-calendar',
      date: '03-05-2025',
      name: 'Juliana Castro',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      company: 'Google'
    },
    {
      color: '#FFD93D',
      icon: 'pi pi-camera',
      date: '18-03-2025',
      name: 'Roberto Lima',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      company: 'Amazon'
    },
    {
      color: '#9D4EDD',
      icon: 'pi pi-shopping-cart',
      date: '02-05-2025',
      name: 'Fernanda Souza',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      company: 'Meta'
    },
    {
      color: '#FF9F1C',
      icon: 'pi pi-clock',
      date: '10-04-2025',
      name: 'Eduardo Mello',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
      company: 'Tesla'
    },
    {
      color: '#2EC4B6',
      icon: 'pi pi-envelope',
      date: '04-05-2025',
      name: 'Camila Duarte',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
      company: 'NVIDIA'
    },
    {
      color: '#D81159',
      icon: 'pi pi-heart',
      date: '29-04-2025',
      name: 'André Oliveira',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      company: 'IBM'
    }
  ];
}
