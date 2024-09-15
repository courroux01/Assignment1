import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  mainText = 'Copyright Abdullah Alojado - Sheridan Student';
  listLabel = 'Technologies Used:';
  technologies = [
    'HTML5',
    'CSS6',
    'JavaScript',
    'AngularJS',
    'TypeScript',
    'Material UI',
    'NodeJS - NPM',
    'Git and Github',
  ];
}
