import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../../services/api-service/api-service.service';
import { GetCusomerOverviewAPIResponse } from '../model/overview';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _apiClientService: ApiServiceService) {}

  getOverviewData(): Observable<GetCusomerOverviewAPIResponse> {
    return this._apiClientService.get('assets/data/customer/overview.json');
  }
}
