import { Component } from '@angular/core';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-home',
  imports: [
    ProductCategoriesComponent,
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    CarouselProductsListingsComponent,
  ],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {
  productListings = productListingsData;
}
