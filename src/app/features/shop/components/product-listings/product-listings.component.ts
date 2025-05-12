import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucideAngularModule } from 'lucide-angular';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import productListingsData from '../../data/product-listings.data';

import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';

@Component({
  selector: 'app-product-listings',
  imports: [
    LucideAngularModule,
    ProductListingsCardComponent,
    ProductFilterSidebarComponent,
    CommonModule,
  ],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  productListings = productListingsData;
}
