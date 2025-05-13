import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-shop-home-products-listings',
  imports: [
    LucideAngularModule,
    ProductListingsCardComponent,
    ProductFilterSidebarComponent,
    CommonModule,
    ProductFilterButtonComponent,
  ],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ShopHomeProductsListingsComponent {
  productListings = productListingsData;
}
