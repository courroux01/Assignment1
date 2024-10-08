import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      id: 'Project 1',
      title: 'Spotify Clone',
      subtitle: 'A fully functional spotify clone.',
      description: [
        'This project is a full fledged clone of Spotify, able to import and play music.',
        'It is connected to a remote cloud based PostgreSQL server called Supabase that updates user and music data in real time.',
        'This project is made using ReactJS and NextJS, alongside TailwindCSS.',
        'It features secure password encryption with JWT and Crypto libraries in-place.',
        'Stripe integration is also key for this app, proper API endpoints were done and payments are fully functional.',
        'Gmail and Github verification for user creation and authentication is also part of this application.',
        'This project is hosted on Vercel, but might not work at the moment because the Supabase server is inactive.',
        'This took at least 14 days to finish.',
      ],
      image: 'assets/images/Project1.png',
    },
    {
      id: 'Project 2',
      title:
        'Introduction to Tensorflow for AI and Machine Learning - Coursera.',
      subtitle: 'A Tensorflow course I did this summer.',
      description: [
        'I finished this course on coursera.org.',
        'This course taught me data science principles.',
        'Also with that is an introduction to neural networks and how to build them',
        'Projects on this course include a simple cat and dog picture classifier,',
        'As well as a clothing classifier.',
        'This course took me a week to finish.',
      ],
      image: 'assets/images/Project2.png',
    },
    {
      id: 'Project 3',
      title: 'Convolutional Neural Networks - Coursera.',
      subtitle: 'A more advanced course to the previous one.',
      description: [
        'I finished this course on coursera.org.',
        'This course followed more deeply the principles taught in the previous one.',
        'Projects on this course focused on increasing the accuracy of the neural networks built before',
        'As well as data augmentation and optimization.',
        'This course also took me a week to finish.',
      ],
      image: 'assets/images/Project3.png',
    },
    {
      id: 'Project 4',
      title: 'Blackjack CLI Application in Python',
      subtitle: 'A class based multi-player blackjack app with dealer logic.',
      description: [
        'This was the most recent project I made,',
        'As part of the requirements on a course I am currently taking on Udemy called 100 Days in Python.',
        'It features robust game logic, fully coded in OOP principles for maximum reusability.',
        'I also made a special Helper library that includes a method that reasks the user for an input until,',
        'The requirements for the specific input are all handled through lambda functions.',
        'I have plans to transfer this idea using React (or maybe Angular if i like it better) to make it more interactive.',
        'This project was made in a week, and I finished it 3 days ago.',
      ],
      image: 'assets/images/Project4.png',
    },
    {
      id: 'Project 5',
      title: '2048 Game on Native JS',
      subtitle:
        'A project I made with the help of a youtube video when I was new to programming.',
      description: [
        'I remember making this project very vividly.',
        'I was in the Philippines then, about two years ago.',
        'This project built the foundation for my understanding of event-driven programming.',
        'After all, the game was built around its users pressing the arrow buttons on their keyboard.',
        'The most complicated part of this project was the proliferation of callback functions, ',
        'Modular JS, and Promises and Asynchronous Programming, ',
        'which were concepts incredibly difficult for me around that time.',
        "Sadly, I didn't commit the project on my github at that time because I didn't know git",
        'So all I can show is a picture of my inspiration for it from Web Dev Simplified',
        'One improvement I can do when I recreate this project in the future is to incorporate mobile use:',
        'Meaning, you can play with the swipe of a finger.',
        'This project is also non-responsive and responsive design would be necessary for this endeavor.',
        'I finished this project about 2 years ago.',
      ],
      image: 'assets/images/Project5.png',
    },
  ];
}
