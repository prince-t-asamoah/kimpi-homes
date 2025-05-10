import { ProductFilter } from '../model/product-listings.model';

export const categoriesFilter: ProductFilter = {
  id: 'categories',
  name: 'Categories',
  filterBy: [
    {
      id: 'office-furniture',
      name: 'Office furniture',
    },
    {
      id: 'dinning',
      name: 'Dinning',
    },
    {
      id: 'living-room',
      name: 'Living room',
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
    },
    {
      id: 'outdoor',
      name: 'Outdoor',
    },
  ],
};

export const sizeDimensionFilter: ProductFilter = {
  id: 'size-dimensions',
  name: 'Size & Dimensions',
  filterBy: [
    {
      id: 'small',
      name: 'Small',
    },
    {
      id: 'medium',
      name: 'Medium',
    },
    {
      id: 'large',
      name: 'Large',
    },
  ],
};

export const availabilityFilter: ProductFilter = {
  id: 'availability',
  name: 'Availability',
  filterBy: [
    {
      id: 'in-stock',
      name: 'In-stock',
    },
    {
      id: 'pre-order',
      name: 'Pre-order',
    },
  ],
};

export const pricingFilter: ProductFilter = {
  id: 'pricing',
  name: 'Pricing',
  filterBy: [
    { id: 'min-value', name: 'Min Value', value: 0 },
    {
      id: 'max-value',
      name: 'Max Value',
      value: 50000,
    },
  ],
};
