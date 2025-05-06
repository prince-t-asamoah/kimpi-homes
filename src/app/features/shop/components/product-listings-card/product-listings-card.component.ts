import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Product } from '../../model/product-listings.model';

@Component({
  selector: 'app-product-listings-card',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './product-listings-card.component.html',
  styleUrl: './product-listings-card.component.scss',
})
export class ProductListingsCardComponent {
  product = input<Product>();
}
