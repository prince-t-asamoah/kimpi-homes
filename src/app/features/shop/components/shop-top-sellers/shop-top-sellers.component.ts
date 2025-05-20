import { Component } from '@angular/core';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { TopSellersListingsComponent } from './components/top-sellers-listings/top-sellers-listings.component';
import { RecommendedProductsListingsComponent } from '../recommended-products-listings/recommended-products-listings.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-top-sellers',
  imports: [
    ProductFilterButtonComponent,
    ProductFilterSidebarComponent,
    TopSellersListingsComponent,
    RecommendedProductsListingsComponent,
  ],
  templateUrl: './shop-top-sellers.component.html',
  styleUrl: './shop-top-sellers.component.scss',
})
export class ShopTopSellersComponent {
  public readonly productListings = productListingsData;
  currantPageNumber = 1;
  totalPages = 10;
}
