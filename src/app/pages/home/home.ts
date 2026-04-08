import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about';
import { ContactComponent } from '../../components/contact/contact';
import { ExperienceComponent } from '../../components/experience/experience';
import { HeroComponent } from '../../components/hero/hero';
import { StackComponent } from '../../components/stack/stack';
import { MainLayoutComponent } from '../../layouts/main-layouts/main-layouts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainLayoutComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    StackComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: []
})
export class HomeComponent { }
