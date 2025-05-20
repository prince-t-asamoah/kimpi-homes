import { Component, Input } from '@angular/core';
import { Product } from '../../model/product-listings.model';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { ProductsPaginationButtonsComponent } from '../products-pagination-buttons/products-pagination-buttons.component';

@Component({
  selector: 'app-paginated-product-listings',
  imports: [ProductListingsCardComponent, ProductsPaginationButtonsComponent],
  templateUrl: './paginated-product-listings.component.html',
  styleUrl: './paginated-product-listings.component.scss',
})
export class PaginatedProductListingsComponent {
  @Input({ required: true }) productListings: Product[] = [];
  @Input({ required: true }) title = 'No title';
  @Input({ required: true }) totalPages = 10;
  @Input({ required: true }) currentPageNumber = 1;
  @Input({ required: true }) totalProducts = 0;
}
