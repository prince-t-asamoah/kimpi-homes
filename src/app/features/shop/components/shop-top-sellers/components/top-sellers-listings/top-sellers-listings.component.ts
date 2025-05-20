import { Component, Input } from '@angular/core';
import { Product } from '../../../../model/product-listings.model';
import { ProductListingsCardComponent } from '../../../product-listings-card/product-listings-card.component';
import { ProductsPaginationButtonsComponent } from '../../../products-pagination-buttons/products-pagination-buttons.component';

@Component({
  selector: 'app-top-sellers-listings',
  imports: [ProductListingsCardComponent, ProductsPaginationButtonsComponent],
  templateUrl: './top-sellers-listings.component.html',
  styleUrl: './top-sellers-listings.component.scss',
})
export class TopSellersListingsComponent {
  @Input({ required: true }) productListings: Product[] = [];
  @Input({ required: true }) totalPages = 10;
  @Input({ required: true }) currentPageNumber = 1;
  @Input({ required: true }) currentPageRoute = '';
}
