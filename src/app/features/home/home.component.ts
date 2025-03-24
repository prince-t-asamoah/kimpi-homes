import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, BenefitsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
