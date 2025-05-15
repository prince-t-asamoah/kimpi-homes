import { Component } from '@angular/core';
import { CarouselButtonComponent } from '../../../../components/carousel-button/carousel-button.component';

@Component({
  selector: 'app-products-carousel',
  imports: [CarouselButtonComponent],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss',
})
export class ProductsCarouselComponent {}
