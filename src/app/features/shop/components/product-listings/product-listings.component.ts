import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import productListingsData from '../../data/product-listings.data';
import productFilterTypes from '../../data/product-filter-types.data';

@Component({
  selector: 'app-product-listings',
  imports: [LucideAngularModule, ProductListingsCardComponent],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  productListings = productListingsData;
  filterTypes = productFilterTypes;
}
