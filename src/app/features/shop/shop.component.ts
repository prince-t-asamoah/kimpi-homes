import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-shop',
  imports: [
    NavbarComponent,
    LanguageBarComponent,
    FooterComponent,
    ProductCategoriesComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {}
