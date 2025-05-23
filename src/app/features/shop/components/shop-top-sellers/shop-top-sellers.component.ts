import { Component } from '@angular/core';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { PaginatedProductListingsComponent } from '../paginated-product-listings/paginated-product-listings.component';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';
import { Product } from '../../model/product-listings.model';
import { ProductListingsService } from '../../services/product-listings/product-listings.service';

@Component({
  selector: 'app-shop-top-sellers',
  imports: [
    ProductFilterButtonComponent,
    ProductFilterSidebarComponent,
    CarouselProductsListingsComponent,
    PaginatedProductListingsComponent,
    ShopBreadcrumbComponent,
  ],
  templateUrl: './shop-top-sellers.component.html',
  styleUrl: './shop-top-sellers.component.scss',
})
export class ShopTopSellersComponent {
  public readonly productListings: Product[] = [];
  recommendedListings: Product[] = [];
  topSellersListings: Product[] = [];
  currantPageNumber = 1;
  totalPages = 10;
  totalProducts = 1500;

  constructor(private _productListingsService: ProductListingsService) {
    this.getProductListings();
  }

  getProductListings(): void {
    this.recommendedListings = [];
    this.topSellersListings = [];
    this._productListingsService.getAllProductListings().subscribe({
      next: response => {
        if (response.data) {
          this.recommendedListings = response.data.recommended;
          this.topSellersListings = response.data.topSellers;
        }
      },
      error: error => {
        console.error('Error fetching product listings:', error);
      },
    });
  }
}
