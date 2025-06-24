import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { LoginComponent } from './features/auth/login/login.component';
import { CreateAccountComponent } from './features/auth/create-account/create-account.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { CartComponent } from './features/cart/cart.component';
import { clientOnlyGuard } from './guards/client-only/client-only.guard';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Kimpi Homes' },
  { path: 'home', component: HomeComponent, title: 'Kimpi Homes | Home' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./features/shop/shop.module').then(m => m.ShopModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./features/customer/customer.module').then(m => m.CustomerModule),
    canMatch: [clientOnlyGuard, authGuard],
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
    canMatch: [clientOnlyGuard],
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    title: 'Kimpi Homes | Create Account',
    canMatch: [clientOnlyGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Kimpi Homes | Forgot Password',
    canMatch: [clientOnlyGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    title: 'Kimpi Homes | Reset Password',
    canMatch: [clientOnlyGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Kimpi Homes | Cart',
    canMatch: [clientOnlyGuard],
  },
];
