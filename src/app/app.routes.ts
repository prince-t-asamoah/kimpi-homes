import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { LoginComponent } from './features/auth/login/login.component';
import { CreateAccountComponent } from './features/auth/create-account/create-account.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { ShopHomeComponent } from './features/shop/components/shop-home/shop-home.component';
import { ShopNewArrivalsComponent } from './features/shop/components/shop-new-arrivals/shop-new-arrivals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Kimpi Homes' },
  { path: 'home', component: HomeComponent, title: 'Kimpi Homes | Home' },
  {
    path: 'shop',
    title: 'Kimpi Homes | Shop',
    component: ShopComponent,
    children: [
      { path: '', component: ShopHomeComponent, title: 'Kimpi Homes | Shop' },
      {
        path: 'new-arrivals',
        component: ShopNewArrivalsComponent,
        title: 'Kimpi Homes | Shop - New Arrivals',
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
