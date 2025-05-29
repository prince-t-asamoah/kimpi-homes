import { CustomerOrder } from '../model/overview';

const ordersData: CustomerOrder[] = [
  {
    id: '12345',
    date: '2023-10-01T00:00:00Z',
    total: '$150.00',
    status: 'delivered',
    items: 3,
  },
  {
    id: '12346',
    date: '2023-10-02T00:00:00Z',
    total: '$200.00',
    status: 'processing',
    items: 5,
  },
  {
    id: '12347',
    date: '2023-10-03T00:00:00Z',
    total: '$75.00',
    status: 'shipping',
    items: 2,
  },
  {
    id: '12348',
    date: '2023-10-04T00:00:00Z',
    total: '$120.00',
    status: 'delivered',
    items: 4,
  },
  {
    id: '12349',
    date: '2023-10-05T00:00:00Z',
    total: '$300.00',
    status: 'cancelled',
    items: 6,
  },
  {
    id: '12350',
    date: '2023-10-06T00:00:00Z',
    total: '$90.00',
    status: 'processing',
    items: 1,
  },
  {
    id: '12351',
    date: '2023-10-07T00:00:00Z',
    total: '$250.00',
    status: 'shipping',
    items: 7,
  },
  {
    id: '12352',
    date: '2023-10-08T00:00:00Z',
    total: '$180.00',
    status: 'delivered',
    items: 3,
  },
  {
    id: '12353',
    date: '2023-10-09T00:00:00Z',
    total: '$60.00',
    status: 'returned',
    items: 2,
  },
  {
    id: '12354',
    date: '2023-10-10T00:00:00Z',
    total: '$110.00',
    status: 'processing',
    items: 4,
  },
];

export default ordersData;
