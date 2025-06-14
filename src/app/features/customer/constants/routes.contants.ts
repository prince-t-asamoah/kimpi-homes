const customerRoutes = {
  overview: {
    name: 'Overview',
    route: '/customer/overview',
  },
  personalDetails: {
    name: 'Personal Details',
    route: '/customer/personal-details',
  },
  address: {
    name: 'Address',
    route: '/customer/address',
  },
  orderHistory: {
    name: 'Order History',
    route: '/customer/order-history',
  },
  messages: {
    name: 'Messages',
    route: '/customer/messages',
  },
  accountSettings: {
    name: 'Account Settings',
    route: '/customer/account-settings',
  },
};

export const CUSTOMER_ROUTES = Object.freeze(customerRoutes);
