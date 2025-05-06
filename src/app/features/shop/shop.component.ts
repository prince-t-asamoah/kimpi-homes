import { Component, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { ProductListingsComponent } from './components/product-listings/product-listings.component';

@Component({
  selector: 'app-shop',
  imports: [
    RouterModule,
    LucideAngularModule,
    NavbarComponent,
    LanguageBarComponent,
    FooterComponent,
    ProductCategoriesComponent,
    ProductListingsComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ShopComponent {}
