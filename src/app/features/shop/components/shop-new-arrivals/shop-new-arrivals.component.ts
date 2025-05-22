import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { PaginatedProductListingsComponent } from '../paginated-product-listings/paginated-product-listings.component';
import productListingsData from '../../data/product-listings.data';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';

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
  public readonly productListings = productListingsData;
  currantPageNumber = 1;
  totalPages = 10;
  totalProducts = 1500;

  constructor(private _router: ActivatedRoute) {}

  ngOnInit(): void {
    const pageNumber = this._router.snapshot.paramMap.get('pageNumber') ?? 1;
    this.currantPageNumber = Number(pageNumber);
  }
}
