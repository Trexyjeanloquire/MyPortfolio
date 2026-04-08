import { Component } from '@angular/core';

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: []
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly footerLinks: readonly FooterLink[] = [
    { label: 'Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
}
