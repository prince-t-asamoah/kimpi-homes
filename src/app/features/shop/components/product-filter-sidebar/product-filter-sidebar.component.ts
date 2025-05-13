import { LucideAngularModule } from 'lucide-angular';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductFilterOptionComponent } from '../product-filter-option/product-filter-option.component';
import {
  categoriesFilter,
  sizeDimensionFilter,
  availabilityFilter,
  pricingFilter,
  sortingFilter,
} from '../../data/product-filter-types.data';
import { UiService } from '../../../../services/ui/ui.service';

@Component({
  selector: 'app-product-filter-sidebar',
  imports: [
    NgClass,
    LucideAngularModule,
    ProductFilterComponent,
    ProductFilterOptionComponent,
  ],
  templateUrl: './product-filter-sidebar.component.html',
  styleUrl: './product-filter-sidebar.component.scss',
})
export class ProductFilterSidebarComponent {
  uiService = inject(UiService);
  categoriesFilter = categoriesFilter;
  sizeDimensionFilter = sizeDimensionFilter;
  availabilityFilter = availabilityFilter;
  priceFilter = pricingFilter;
  sortByFilter = sortingFilter;

  isSidebarOpen = this.uiService.isFilterSidebarOpen;

  onFilterChange(): void {
    // Handle filter change logic here
  }

  toggleSidebarOnMobile(): void {
    this.uiService.toggleFilterSidebar();
  }
}
