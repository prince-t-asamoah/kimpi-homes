import { Component } from '@angular/core';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-new-arrivals',
  imports: [
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    ProductListingsCardComponent,
  ],
  templateUrl: './shop-new-arrivals.component.html',
  styleUrl: './shop-new-arrivals.component.scss',
})
export class ShopNewArrivalsComponent {
  productListings = productListingsData;
}
