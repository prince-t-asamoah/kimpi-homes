import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { PaginatedProductListingsComponent } from '../paginated-product-listings/paginated-product-listings.component';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';
import { Product } from '../../model/product-listings.model';
import { ProductListingsService } from '../../services/product-listings/product-listings.service';

@Component({
  selector: 'app-shop-new-arrivals',
  imports: [
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    CarouselProductsListingsComponent,
    PaginatedProductListingsComponent,
    ShopBreadcrumbComponent,
  ],
  templateUrl: './shop-new-arrivals.component.html',
  styleUrl: './shop-new-arrivals.component.scss',
})
export class ShopNewArrivalsComponent implements OnInit {
  productListings: Product[] = [];
  recommendedListings: Product[] = [];
  newArrivalsListings: Product[] = [];
  currentPageNumber = 1;
  totalPages = 10;
  totalProducts = 1500;

  constructor(
    private _router: ActivatedRoute,
    private _productListingsService: ProductListingsService
  ) {}

  ngOnInit(): void {
    const pageNumber = this._router.snapshot.paramMap.get('pageNumber') ?? 1;
    this.currentPageNumber = Number(pageNumber);

    this.getProductListings();
  }

  getProductListings(): void {
    this.recommendedListings = [];
    this.newArrivalsListings = [];
    this._productListingsService.getAllProductListings().subscribe({
      next: response => {
        if (response.data) {
          this.recommendedListings = response.data.recommended;
          this.newArrivalsListings = response.data.newArrivals;
        }
      },
      error: error => {
        console.error('Error fetching product listings:', error);
      },
    });
  }
}
