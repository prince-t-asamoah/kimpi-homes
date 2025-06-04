import { GetApiResponse } from '../../../model/api-response';
import { CustomerOrder } from './customer.model';

interface CustomerOverviewData {
  statistics: {
    totalOrders: number;
    totalShipment: number;
    totalReturns: number;
  };
  recentOrders: CustomerOrder[];
}

export interface GetCustomerOverviewAPIResponse extends GetApiResponse {
  data: CustomerOverviewData;
}
