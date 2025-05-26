import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { LoginComponent } from './features/auth/login/login.component';
import { CreateAccountComponent } from './features/auth/create-account/create-account.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { ShopComponent } from './features/shop/shop.component';
import { ShopHomeComponent } from './features/shop/components/shop-home/shop-home.component';
import { ShopNewArrivalsComponent } from './features/shop/components/shop-new-arrivals/shop-new-arrivals.component';
import { ShopTopSellersComponent } from './features/shop/components/shop-top-sellers/shop-top-sellers.component';
import { ShopSearchResultsComponent } from './features/shop/components/shop-search-results/shop-search-results.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Kimpi Homes' },
  { path: 'home', component: HomeComponent, title: 'Kimpi Homes | Home' },
  {
    path: 'shop',
    title: 'Kimpi Homes | Shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: ShopHomeComponent,
        title: 'Kimpi Homes | Shop',
      },
      {
        path: 'new-arrivals/:pageNumber',
        component: ShopNewArrivalsComponent,
        title: 'Kimpi Homes | Shop - New Arrivals',
      },
      {
        path: 'top-sellers/:pageNumber',
        component: ShopTopSellersComponent,
        title: 'Kimpi Homes | Shop - Top Sellers',
      },
      {
        path: 'search',
        component: ShopSearchResultsComponent,
        title: 'Kimpi Homes | Shop - Search Results',
      },
    ],
  },
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
  {
    path: 'create-account',
    component: CreateAccountComponent,
    title: 'Kimpi Homes | Create Account',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Kimpi Homes | Forgot Password',
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    title: 'Kimpi Homes | Reset Password',
  },
];
