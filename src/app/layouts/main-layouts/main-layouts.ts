import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBar } from '../../components/top-bar/top-bar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, TopBar, FooterComponent],
  templateUrl: './main-layouts.html',
  styleUrls: []
})
export class MainLayoutComponent implements OnInit {
  ngOnInit(): void {
    this.initProgress();
    this.initParticles();
    this.initReveal();
    this.initActiveNav();
  }

  private initProgress(): void {
    const prog = document.getElementById('progress');
    if (!prog) return;
    window.addEventListener('scroll', () => {
      prog.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
    });
  }

  private initParticles(): void {
    const cvs = document.getElementById('particles') as HTMLCanvasElement;
    if (!cvs) return;
    const ctx = cvs.getContext('2d')!;
    let W: number, H: number;
    let pts: any[] = [];

    const resize = () => { W = cvs.width = window.innerWidth; H = cvs.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', () => { resize(); init(); });

    const init = () => {
      pts = [];
      const n = Math.floor((W * H) / 20000);
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, r: Math.random() * 1.4 + 0.4, a: Math.random() * 0.45 + 0.1 });
      }
    };
    init();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.07 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  }

  private initReveal(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  private initActiveNav(): void {
    const secs = document.querySelectorAll('section[id]');
    const nls = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let c = '';
      secs.forEach(s => { if (window.scrollY >= (s as HTMLElement).offsetTop - 250) c = s.id; });
      nls.forEach(a => {
        if (!a.classList.contains('nav-hire'))
          (a as HTMLElement).style.color = a.getAttribute('href') === '#' + c ? 'var(--c)' : '';
      });
    });
  }
}
