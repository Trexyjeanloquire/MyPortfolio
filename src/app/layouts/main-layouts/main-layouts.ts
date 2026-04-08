import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer';
import { TopBarComponent } from '../../components/top-bar/top-bar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopBarComponent, FooterComponent],
  templateUrl: './main-layouts.html',
  styleUrls: []
})
export class MainLayoutComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.initRevealObserver();
    this.initActiveSectionObserver();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.sectionObserver?.disconnect();
  }

  private initRevealObserver(): void {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');

    if (typeof IntersectionObserver === 'undefined') {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealElements.forEach((element) => this.revealObserver?.observe(element));
  }

  private initActiveSectionObserver(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-nav-link]'));

    if (!sections.length || !navLinks.length) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      navLinks[0]?.classList.add('is-active');
      return;
    }

    const setActiveLink = (sectionId: string): void => {
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${sectionId}`;
        link.classList.toggle('is-active', isMatch);
      });
    };

    setActiveLink(sections[0].id);

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        setActiveLink((visibleEntries[0].target as HTMLElement).id);
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-32% 0px -45% 0px',
      }
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));
  }
}
