import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductListingsCardComponent } from '../product-listings-card/product-listings-card.component';
import productListingsData from '../../data/product-listings.data';

@Component({
  selector: 'app-product-listings',
  imports: [LucideAngularModule, ProductListingsCardComponent],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListingsComponent {
  productListings = productListingsData;
  filterTypes = [
    {
      type: 'categories',
      name: 'Categories',
      keys: [
        {
          id: '1',
          name: 'Office furniture',
        },
        {
          id: '2',
          name: 'Dinning',
        },
        {
          id: '3',
          name: 'Living room',
        },
        {
          id: '4',
          name: 'Bedroom',
        },
        {
          id: '5',
          name: 'Outdoor',
        },
      ],
    },
    {
      type: 'size-dimensions',
      name: 'Size & Dimensions',
      keys: [
        {
          id: 'small',
          name: 'Small',
        },
        {
          id: 'medium',
          name: 'Medium',
        },
        {
          id: 'large',
          name: 'Large',
        },
      ],
    },
    {
      type: 'Availability',
      name: 'Availability',
      keys: [
        {
          id: 'in-stock',
          name: 'In-stock',
        },
        {
          id: 'pre-order',
          name: 'Pre-order',
        },
      ],
    },
  ];
}
