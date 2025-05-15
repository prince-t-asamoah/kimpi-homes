import { Component, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CarouselButtonComponent } from '../carousel-button/carousel-button.component';

@Component({
  selector: 'app-product-categories',
  imports: [LucideAngularModule, CarouselButtonComponent],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCategoriesComponent {}
