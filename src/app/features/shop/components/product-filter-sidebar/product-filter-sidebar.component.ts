import { Component } from '@angular/core';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductFilterOptionComponent } from '../product-filter-option/product-filter-option.component';
import {
  categoriesFilter,
  sizeDimensionFilter,
  availabilityFilter,
  pricingFilter,
  sortingFilter,
} from '../../data/product-filter-types.data';

@Component({
  selector: 'app-product-filter-sidebar',
  imports: [ProductFilterComponent, ProductFilterOptionComponent],
  templateUrl: './product-filter-sidebar.component.html',
  styleUrl: './product-filter-sidebar.component.scss',
})
export class ProductFilterSidebarComponent {
  categoriesFilter = categoriesFilter;
  sizeDimensionFilter = sizeDimensionFilter;
  availabilityFilter = availabilityFilter;
  priceFilter = pricingFilter;
  sortByFilter = sortingFilter;

  onFilterChange(): void {
    // Handle filter change logic here
  }
}
