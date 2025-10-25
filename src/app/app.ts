import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  name = 'Vicktor Joshua';
  title = 'Product Designer (UI/UX)';
  email = 'vicktorjoshua@gmail.com';
  phone = '09039725075';
  portfolio = 'https://vicktorjoshua.framer.website/';
  
  profile = `Product Designer (UI/UX) with 1+ year of experience creating responsive, user-centered digital products.
  With a background in graphics design, I bring a strong visual foundation to product design, crafting solutions
  that balance usability and clarity. I’m passionate about solving problems through design and contributing fresh,
  creative solutions to forward-thinking teams.`;

  skills = [
    'UI/UX Design, Wireframing, Prototyping',
    'User Testing, User Research, Product Management'
  ];

  tools = ['Figma', 'Framer', 'Webflow', 'WordPress', 'Notion'];

  experiences = [
    {
      role: 'Freelance Product Designer',
      period: 'Aug 2024 – Present',
      details: [
        'Designed and prototyped responsive interfaces, applying design thinking to improve usability and user flow.',
        'Conducted user research and usability testing, leading to design refinements and higher user satisfaction.',
        'Built scalable design systems and reusable UI elements, reducing design time on future projects by 30%.',
        'Recreated and enhanced a fintech mobile app (Pardin Banking App).',
        'Collaborated with BeTechified team on an AgroTech mobile app.'
      ]
    },
    {
      role: 'Graphics Designer',
      period: 'May 2022 – Aug 2024',
      details: [
        'Designed logos, social media creatives and brand assets.',
        'Applied typography, layout, and color theory for brand-aligned designs.',
        'Managed projects independently from brief to delivery.'
      ]
    }
  ];

  certifications = [
    'Product Design Bootcamp – BeTechified | 2025',
    'UX Design Nanodegree – Udacity | 2024 – 2025',
    'B.Ed. Health Education – University of Lagos | 2018 – 2023',
    'NYSC | 2024 – 2025'
  ];

  showMessage() {
    alert('Thanks for checking out my CV app!');
  }
}