import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { FlashSalesComponent } from './components/flash-sales/flash-sales.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    BenefitsComponent,
    ProductCategoriesComponent,
    NewProductsComponent,
    FooterComponent,
    LanguageBarComponent,
    FlashSalesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
