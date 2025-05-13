import { Component } from '@angular/core';
import { ShopHomeProductsListingsComponent } from '../product-listings/product-listings.component';
import { ProductCategoriesComponent } from '../../../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-shop-home',
  imports: [ShopHomeProductsListingsComponent, ProductCategoriesComponent],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {}
