import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {ScrollPanel} from 'primeng/scrollpanel';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [
    Timeline,
    Card,
    Button,
    CommonModule,
    ScrollPanel,
    RouterOutlet
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  events: any[] | undefined;
}
