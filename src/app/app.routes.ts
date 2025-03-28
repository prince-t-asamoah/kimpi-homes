import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Kimpi Homes' },
  { path: 'home', component: HomeComponent, title: 'Kimpi Homes | Home' },
  { path: 'shop', component: ShopComponent, title: 'Kimpi Homes | Shop' },
];
