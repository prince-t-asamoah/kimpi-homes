import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Kimpi Homes' },
  { path: 'home', component: HomeComponent, title: 'Kimpi Homes | Home' },
  { path: 'shop', component: ShopComponent, title: 'Kimpi Homes | Shop' },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'Kimpi Homes | About Us',
  },

  {
    path: 'login',
    component: LoginComponent,
    title: 'Kimpi Homes | Login',
  },
];
