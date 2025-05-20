import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsCarouselComponent } from '../products-carousel/products-carousel.component';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { Product } from './../../model/product-listings.model';

@Component({
  selector: 'app-recommended-products-listings',
  imports: [
    RouterLink,
    ProductsCarouselComponent,
    ProductListingsCardComponent,
  ],
  templateUrl: './recommended-products-listings.component.html',
  styleUrl: './recommended-products-listings.component.scss',
})
export class RecommendedProductsListingsComponent {
  @Input({ required: true }) productListings: Product[] = [];
}
