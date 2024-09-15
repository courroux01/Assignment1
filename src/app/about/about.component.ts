import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  mainText = 'Hello! I am Abdullah- AB for short.';
  description = [
    'I used to love web development, but recently I find myself leaning towards AI and python.',
    "When I was more interested, I mainly used ReactJS and NextJS as the former's framework.",
    'I have created a particularly cool application then, which is present on the projects section of this page',
    'I had a particular distaste of angular as a React "enjoyer" due to its pretty weird looping syntax',
    'as well as how components are structured.',
    'After all, a component folder here is basically a single tsx file there, especially with TailwindCSS.',
    'I have also learned a lot of UI libraries on react (which maybe are also supported by typescript) such as ShadcnUI and Framer Motion.',
    "I also heard Angular's state and side effect management may not be as straightforward.",
    'Dissing Angular aside, I hope that this course will reignite my burnt passion in this area of tech.',
    "\n, P.S. I'm that guy who is always late... Sorry :))",
  ];
}
