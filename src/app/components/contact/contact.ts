import { Component } from '@angular/core';

interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: []
})
export class ContactComponent {
  readonly contactLinks: readonly ContactLink[] = [
    {
      label: 'Email',
      value: 'hello@yourdev.com',
      href: 'mailto:hello@yourdev.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourhandle',
      href: 'https://github.com/yourhandle',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      external: true,
    },
  ];
}
