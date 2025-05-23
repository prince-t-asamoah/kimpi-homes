import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';
import { ProductListingsService } from '../../services/product-listings/product-listings.service';
import { ProductListings } from '../../model/product-listings.model';

@Component({
  selector: 'app-shop-home',
  imports: [
    LucideAngularModule,
    ProductCategoriesComponent,
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    CarouselProductsListingsComponent,
    ShopBreadcrumbComponent,
  ],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {
  productListings: ProductListings | null = null;
  productListingsService = inject(ProductListingsService);

  constructor() {
    this.getAllProductListings();
  }

  getAllProductListings(): void {
    this.productListingsService.getAllProductListings().subscribe({
      next: response => {
        if (response.data) {
          this.productListings = response.data;
        }
      },
    });
  }
}
