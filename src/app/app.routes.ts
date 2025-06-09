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
import { CustomerComponent } from './features/customer/customer.component';
import { CustomerOverviewComponent } from './features/customer/components/customer-overview/customer-overview.component';
import { CustomerPersonalDetailsComponent } from './features/customer/components/customer-personal-details/customer-personal-details.component';
import { CustomerAddressComponent } from './features/customer/components/customer-address/customer-address.component';
import { CustomerOrderHistoryComponent } from './features/customer/components/customer-order-history/customer-order-history.component';
import { CustomerMessagesComponent } from './features/customer/components/customer-messages/customer-messages.component';
import { CustomerAccountSettingsComponent } from './features/customer/customer-account-settings/customer-account-settings.component';

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
    path: 'customer',
    component: CustomerComponent,
    title: 'Kimpi Homes | Customer Account',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: CustomerOverviewComponent,
        title: 'Kimpi Homes | Customer Overview',
      },
      {
        path: 'personal-details',
        component: CustomerPersonalDetailsComponent,
        title: 'Kimpi Homes | Customer Personal Details',
      },
      {
        path: 'address',
        component: CustomerAddressComponent,
        title: 'Kimpi Homes | Customer Address',
      },
      {
        path: 'order-history',
        component: CustomerOrderHistoryComponent,
        title: 'Kimpi Homes | Customer Order History',
      },
      {
        path: 'messages',
        component: CustomerMessagesComponent,
        title: 'Kimpi Homes | Customer Messages',
      },
      {
        path: 'account-settings',
        component: CustomerAccountSettingsComponent,
        title: 'Kimpi Homes | Customer Account Settings',
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
