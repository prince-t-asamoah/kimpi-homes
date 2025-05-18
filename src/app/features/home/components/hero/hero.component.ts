import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CarouselButtonComponent } from '../../../../components/carousel-button/carousel-button.component';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, RouterModule, CarouselButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
