import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ApiServiceService } from '../../../services/api-service/api-service.service';
import { GetCustomerOverviewAPIResponse } from '../model/overview';
import { GetCustomerOrderHistoryAPIResponse } from '../model/order-history.model';
import { GetCustomerMessagesAPIResponse } from '../model/messages.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _apiClientService: ApiServiceService) {}

  getOverviewData(): Observable<GetCustomerOverviewAPIResponse> {
    return this._apiClientService.get('assets/data/customer/overview.json');
  }

  getOrderHistory(): Observable<GetCustomerOrderHistoryAPIResponse> {
    return this._apiClientService
      .get<GetCustomerOrderHistoryAPIResponse>(
        'assets/data/customer/order-history.json'
      )
      .pipe(delay(1000));
  }

  getMessages(): Observable<GetCustomerMessagesAPIResponse> {
    return this._apiClientService
      .get<GetCustomerMessagesAPIResponse>('assets/data/customer/messages.json')
      .pipe(delay(1000));
  }
}
