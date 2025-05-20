import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselButtonComponent } from '../../../../components/carousel-button/carousel-button.component';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { Product } from '../../model/product-listings.model';

@Component({
  selector: 'app-carousel-products-listings',
  imports: [RouterLink, CarouselButtonComponent, ProductListingsCardComponent],
  templateUrl: './carousel-products-listings.component.html',
  styleUrl: './carousel-products-listings.component.scss',
})
export class CarouselProductsListingsComponent {
  @Input({ required: true }) productListings: Product[] = [];
  @Input({ required: true }) title = 'No title';
  @Input({ required: true }) description = 'No description';
  @Input({ required: true }) viewAllLink = '';
}
