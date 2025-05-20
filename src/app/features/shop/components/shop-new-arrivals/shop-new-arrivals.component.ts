import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { ProductsCarouselComponent } from '../products-carousel/products-carousel.component';
import { ProductsPaginationButtonsComponent } from '../products-pagination-buttons/products-pagination-buttons.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-new-arrivals',
  imports: [
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    ProductListingsCardComponent,
    ProductsCarouselComponent,
    RouterLink,
    ProductsPaginationButtonsComponent,
  ],
  templateUrl: './shop-new-arrivals.component.html',
  styleUrl: './shop-new-arrivals.component.scss',
})
export class ShopNewArrivalsComponent implements OnInit {
  public readonly productListings = productListingsData;
  currantPageNumber = 1;
  totalPages = 10;

  constructor(private _router: ActivatedRoute) {}

  ngOnInit(): void {
    const pageNumber = this._router.snapshot.paramMap.get('pageNumber') ?? 1;
    this.currantPageNumber = Number(pageNumber);
  }
}
