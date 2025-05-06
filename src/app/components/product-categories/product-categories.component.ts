import { Component, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product-categories',
  imports: [LucideAngularModule],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCategoriesComponent {}
