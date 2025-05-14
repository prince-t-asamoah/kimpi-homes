import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-home',
  imports: [
    RouterLink,
    ProductCategoriesComponent,
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    ProductListingsCardComponent,
  ],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {
  productListings = productListingsData;
}
