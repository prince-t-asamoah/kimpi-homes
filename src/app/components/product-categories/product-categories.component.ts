import { Component, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CarouselButtonComponent } from '../carousel-button/carousel-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  imports: [LucideAngularModule, RouterLink, CarouselButtonComponent],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCategoriesComponent {}
