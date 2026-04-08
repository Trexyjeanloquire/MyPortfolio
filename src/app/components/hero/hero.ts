import { Component } from '@angular/core';

interface HeroStat {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrls: []
})
export class HeroComponent {
  readonly stats: readonly HeroStat[] = [
    { value: '5+', label: 'Years experience' },
    { value: '20+', label: 'Projects shipped' },
    { value: '50k+', label: 'Users served' },
  ];
}
