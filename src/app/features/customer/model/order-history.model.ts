import { GetApiResponse } from '../../../model/api-response';
import { CustomerOrder } from './customer.model';

export interface GetCustomerOrderHistoryAPIResponse extends GetApiResponse {
  data: CustomerOrderHistoryData;
}

export interface CustomerOrderHistoryData {
  orders: CustomerOrder[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    perPage: number;
  };
  currency: string;
}
