import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent {
  @Input({ required: true }) filterName!: string;
}
