import { Component } from '@angular/core';
import { ProductListingsComponent } from '../product-listings/product-listings.component';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-shop-home',
  imports: [ProductListingsComponent, ProductCategoriesComponent],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {}
