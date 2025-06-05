import { GetApiResponse } from '../../../model/api-response';

export interface CustomerMessage {
  type: string;
  id: string;
  senderName: string;
  timestamp: string;
  title: string;
  message: string;
  avatar: string | null;
  messageType: 'general' | 'product' | 'order';
}

export interface GetCustomerMessagesAPIResponse extends GetApiResponse {
  data: CustomerMessage[];
}
