import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucideAngularModule } from 'lucide-angular';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import productListingsData from '../../data/product-listings.data';
import {
  categoriesFilter,
  pricingFilter,
  availabilityFilter,
  sizeDimensionFilter,
  sortingFilter,
} from '../../data/product-filter-types.data';
import { ProductFilterOptionComponent } from '../product-filter-option/product-filter-option.component';

@Component({
  selector: 'app-product-listings',
  imports: [
    LucideAngularModule,
    ProductListingsCardComponent,
    ProductFilterComponent,
    ProductFilterOptionComponent,
    CommonModule,
  ],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  productListings = productListingsData;
  categoriesFilter = categoriesFilter;
  sizeDimensionFilter = sizeDimensionFilter;
  availabilityFilter = availabilityFilter;
  priceFilter = pricingFilter;
  sortByFilter = sortingFilter;

  onFilterChange(): void {
    // Handle filter change logic here
  }
}
