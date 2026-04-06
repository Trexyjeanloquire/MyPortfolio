import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrls: []
})
export class StackComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const bobs = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) {
          const f = x.target.querySelector('.bar-fill') as HTMLElement;
          if (f) {
            f.style.transform = `scaleX(${f.dataset['w']})`;
            f.classList.add('go');
          }
          bobs.unobserve(x.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stack-card').forEach(el => bobs.observe(el));
  }
}
