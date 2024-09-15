import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  mainText = 'You can contact me on';
  links = {
    instagram: 'https://www.instagram.com/abeeedd__',
    linkedIn: 'https://www.linkedin.com/in/abdullah-alojado-44517a251/',
    github: 'https://github.com/courroux01/',
  };
  linkKVArray = Object.entries(this.links);
}
