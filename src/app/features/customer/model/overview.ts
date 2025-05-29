import { GetApiResponse } from '../../../model/api-response';

export interface CustomerOrder {
  id: string;
  date: string;
  total: string;
  status: string;
  items?: number;
}

interface CustomerOverviewData {
  statistics: {
    totalOrders: number;
    totalShipment: number;
    totalReturns: number;
  };
  recentOrders: CustomerOrder[];
}

export interface GetCusomerOverviewAPIResponse extends GetApiResponse {
  data: CustomerOverviewData;
}
