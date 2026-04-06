import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../layouts/main-layouts/main-layouts';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ExperienceComponent } from '../../components/experience/experience';
import { StackComponent } from '../../components/stack/stack';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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