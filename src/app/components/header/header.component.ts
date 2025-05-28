import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Menu} from 'primeng/menu';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterLink, Menu, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly wppLink = `https://wa.me/5582996988207?text=Olá%20Lucas,%20gostei%20do%20seu%20perfil%20e%20gostaria%20de%20entrar%20em%20contato%20para%20discutir%20uma%20oportunidade.%20Você%20tem%20interesse%20em%20conversar%20sobre%20uma%20posição?`;
  readonly linkedinLink = `https://www.linkedin.com/in/lucasdue/`;
  readonly mailLink = `mailto:lucasdue94@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá%20Lucas,%20gostei%20do%20seu%20perfil.%20Gostaria%20de%20entrar%20em%20contato.`;
  items: MenuItem[] = [
    {
      label: 'Sobre',
      routerLink: ['/sobre'],
      disabled: false
    },
    {
      label: 'Experiências',
      routerLink: ['/experiencias'],
      disabled: false
    },
    {
      label: 'Tecnologias',
      routerLink: ['/tecnologias'],
      disabled: false
    },
    {
      label: 'Projetos',
      routerLink: ['/projetos'],
      disabled: true
    },
    {
      label: 'Hobbies',
      routerLink: ['/hobbies'],
      disabled: true
    },
  ];

  menuService = inject(MenuService);
  currentMenu = '';

  ngOnInit() {
    this.menuService.getMenu().subscribe(menu => {
      this.currentMenu = menu;
    })
  }

  isSelected(item: MenuItem) {
    return this.currentMenu === item.label
  }

  setMenu(item: MenuItem) {
    this.menuService.setMenu(item.label ?? '');
  }

  ngOnDestroy() {
    this.menuService.clear();
  }
}
