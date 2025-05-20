import { Component } from '@angular/core';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import productListingsData from '../../data/product-listings.data';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { PaginatedProductListingsComponent } from '../paginated-product-listings/paginated-product-listings.component';

@Component({
  selector: 'app-shop-top-sellers',
  imports: [
    ProductFilterButtonComponent,
    ProductFilterSidebarComponent,
    CarouselProductsListingsComponent,
    PaginatedProductListingsComponent,
  ],
  templateUrl: './shop-top-sellers.component.html',
  styleUrl: './shop-top-sellers.component.scss',
})
export class ShopTopSellersComponent {
  public readonly productListings = productListingsData;
  currantPageNumber = 1;
  totalPages = 10;
  totalProducts = 1500;
}
