import { Component } from '@angular/core';

interface AboutStat {
  readonly value: string;
  readonly label: string;
}

interface AboutTag {
  readonly label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: []
})
export class AboutComponent {
  readonly paragraphs: readonly string[] = [
    'A developer from the Philippines who cares deeply about craft. I do not just write code. I build products that hold up under pressure, scale with demand, and stay maintainable long after launch.',
    'Across mobile, backend, and frontend work, I focus on systems that feel deliberate at every layer, from API design and database modeling to polished Angular interfaces.',
  ];

  readonly stats: readonly AboutStat[] = [
    { value: '5+', label: 'Years exp.' },
    { value: '20+', label: 'Projects' },
    { value: '5', label: 'Core techs' },
  ];

  readonly tags: readonly AboutTag[] = [
    { label: 'Laravel' },
    { label: 'Angular' },
    { label: 'Kotlin' },
    { label: 'Java' },
    { label: 'MySQL' },
    { label: 'Clean Architecture' },
  ];
}
