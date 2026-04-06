import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: []
})
export class ExperienceComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('visible');
          obs.unobserve(x.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tl-item').forEach(el => obs.observe(el));
  }
}
