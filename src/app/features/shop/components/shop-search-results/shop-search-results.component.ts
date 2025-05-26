import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { PaginatedProductListingsComponent } from '../paginated-product-listings/paginated-product-listings.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { ProductListingsService } from '../../services/product-listings/product-listings.service';
import { Product } from '../../model/product-listings.model';

@Component({
  selector: 'app-shop-search-results',
  imports: [
    LucideAngularModule,
    ShopBreadcrumbComponent,
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    PaginatedProductListingsComponent,
    CarouselProductsListingsComponent,
  ],
  templateUrl: './shop-search-results.component.html',
  styleUrl: './shop-search-results.component.scss',
})
export class ShopSearchResultsComponent {
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
