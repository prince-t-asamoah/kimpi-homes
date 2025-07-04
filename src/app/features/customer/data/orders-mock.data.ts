import { CustomerOrder } from '../model/customer.model';

const ordersData: CustomerOrder[] = [
  {
    id: '12345',
    date: '2023-10-01T00:00:00Z',
    totalPrice: '$150.00',
    status: 'delivered',
    totalItems: 3,
  },
  {
    id: '12346',
    date: '2023-10-02T00:00:00Z',
    totalPrice: '$200.00',
    status: 'processing',
    totalItems: 5,
  },
  {
    id: '12347',
    date: '2023-10-03T00:00:00Z',
    totalPrice: '$75.00',
    status: 'shipping',
    totalItems: 2,
  },
  {
    id: '12348',
    date: '2023-10-04T00:00:00Z',
    totalPrice: '$120.00',
    status: 'delivered',
    totalItems: 4,
  },
  {
    id: '12349',
    date: '2023-10-05T00:00:00Z',
    totalPrice: '$300.00',
    status: 'cancelled',
    totalItems: 6,
  },
  {
    id: '12350',
    date: '2023-10-06T00:00:00Z',
    totalPrice: '$90.00',
    status: 'processing',
    totalItems: 1,
  },
  {
    id: '12351',
    date: '2023-10-07T00:00:00Z',
    totalPrice: '$250.00',
    status: 'shipping',
    totalItems: 7,
  },
  {
    id: '12352',
    date: '2023-10-08T00:00:00Z',
    totalPrice: '$180.00',
    status: 'delivered',
    totalItems: 3,
  },
  {
    id: '12353',
    date: '2023-10-09T00:00:00Z',
    totalPrice: '$60.00',
    status: 'returned',
    totalItems: 2,
  },
  {
    id: '12354',
    date: '2023-10-10T00:00:00Z',
    totalPrice: '$110.00',
    status: 'processing',
    totalItems: 4,
  },
];

export default ordersData;
