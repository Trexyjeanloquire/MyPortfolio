import { Component } from '@angular/core';

interface StackItem {
  readonly icon: string;
  readonly name: string;
  readonly type: string;
  readonly description: string;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.html',
  styleUrls: []
})
export class StackComponent {
  readonly stackItems: readonly StackItem[] = [
    {
      icon: 'L',
      name: 'Laravel',
      type: 'Backend Framework',
      description:
        'PHP framework for robust REST APIs, authentication systems, and maintainable full web applications.',
    },
    {
      icon: 'J',
      name: 'Java',
      type: 'Core Language',
      description:
        'Enterprise-grade backend logic, Spring services, and high-performance server applications.',
    },
    {
      icon: 'K',
      name: 'Kotlin',
      type: 'Android / Backend',
      description:
        'Modern Android development with Compose and concise, null-safe server-side code.',
    },
    {
      icon: 'A',
      name: 'Angular',
      type: 'Frontend Framework',
      description:
        'Structured TypeScript SPA development with reactive state, component-driven design, and modular architecture.',
    },
    {
      icon: 'DB',
      name: 'MySQL',
      type: 'Database',
      description:
        'Relational data modeling, query optimization, indexing strategies, and safe schema migrations.',
    },
  ];
}
