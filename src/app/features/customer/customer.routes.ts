import { Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerAccountSettingsComponent } from './components/customer-account-settings/customer-account-settings.component';
import { CustomerAddressComponent } from './components/customer-address/customer-address.component';
import { CustomerMessagesComponent } from './components/customer-messages/customer-messages.component';
import { CustomerOrderHistoryComponent } from './components/customer-order-history/customer-order-history.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { CustomerPersonalDetailsComponent } from './components/customer-personal-details/customer-personal-details.component';

export const customerRoutes: Routes = [
  {
    path: '',
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
];
