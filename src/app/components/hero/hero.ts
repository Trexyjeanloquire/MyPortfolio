import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: []
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    this.startTypewriter();
  }

  private startTypewriter(): void {
    const roles = ['Full-Stack Developer', 'Android Engineer', 'Laravel Architect', 'Angular Craftsman'];
    let ri = 0, ci = 0, del = false;
    const el = document.getElementById('tw');
    if (!el) return;

    const type = () => {
      const w = roles[ri];
      if (!del) {
        ci++;
        el.textContent = w.slice(0, ci);
        if (ci === w.length) { del = true; setTimeout(type, 2000); return; }
      } else {
        ci--;
        el.textContent = w.slice(0, ci);
        if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(type, 400); return; }
      }
      setTimeout(type, del ? 55 : 80);
    };
    setTimeout(type, 1000);
  }
}