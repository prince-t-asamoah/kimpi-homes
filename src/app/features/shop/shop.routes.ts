import { Routes } from '@angular/router';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { ShopNewArrivalsComponent } from './components/shop-new-arrivals/shop-new-arrivals.component';
import { ShopSearchResultsComponent } from './components/shop-search-results/shop-search-results.component';
import { ShopTopSellersComponent } from './components/shop-top-sellers/shop-top-sellers.component';
import { ShopComponent } from './shop.component';

export const shopRoutes: Routes = [
  {
    path: '',
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
];
