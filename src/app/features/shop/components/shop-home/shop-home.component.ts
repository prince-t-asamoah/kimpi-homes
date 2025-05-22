import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';
import { ProductFilterSidebarComponent } from '../product-filter-sidebar/product-filter-sidebar.component';
import { ProductFilterButtonComponent } from '../product-filter-button/product-filter-button.component';
import { CarouselProductsListingsComponent } from '../carousel-products-listings/carousel-products-listings.component';
import productListingsData from '../../data/product-listings.data';
import { ShopBreadcrumbComponent } from '../shop-breadcrumb/shop-breadcrumb.component';

@Component({
  selector: 'app-shop-home',
  imports: [
    ProductCategoriesComponent,
    ProductFilterSidebarComponent,
    ProductFilterButtonComponent,
    CarouselProductsListingsComponent,
    LucideAngularModule,
    ShopBreadcrumbComponent,
  ],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {
  productListings = productListingsData;
}
