import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CarouselButtonComponent } from '../../../../components/carousel-button/carousel-button.component';

@Component({
  selector: 'app-new-products',
  imports: [LucideAngularModule, CarouselButtonComponent],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.scss',
})
export class NewProductsComponent {}
