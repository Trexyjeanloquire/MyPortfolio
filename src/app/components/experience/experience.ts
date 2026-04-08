import { Component } from '@angular/core';

interface ExperienceItem {
  readonly year: string;
  readonly duration: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly isCurrent?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrls: []
})
export class ExperienceComponent {
  readonly experienceItems: readonly ExperienceItem[] = [
    {
      year: '2026',
      duration: 'Present',
      role: 'Bachelor of Science Information Technology',
      company: 'Aces Tagum College Inc.',
      description:
        'Designed and built responsive web interfaces using Tailwind CSS, focusing on clean layout, usability, and improving user experience in academic projects.',
      tags: ['Tailwind CSS', 'Angular', 'MySQL',],
      isCurrent: true,
    },
    {
      year: '2025-2024',
      duration: '2 yrs',
      role: 'Bachelor of Science Information Technology',
      company: 'Aces Tagum College Inc.',
      description:
        'Built simple Android apps using Kotlin, like a fun slambook app for friends. I also know how to design user-friendly mobile interfaces using Figma for better HCI (Human-Computer Interaction)',
      tags: ['Kotlin', 'Android', 'Figma', 'Java'],
    },
    {
      year: '2023-2024',
      duration: '1 yr',
      role: 'Bachelor of Science Information Technology',
      company: 'Aces Tagum College Inc.',
      description:
        'Learned the basics of Java programming, including simple things like variables, data types, if-else statements, loops, methods, classes and objects, inheritance, polymorphism, handling errors, and making basic console apps to get a good start in coding.',
      tags: ['Java'],
    },
    
  ];
}
