import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductListingsAPIResponse } from '../../model/product-listings.model';
import { ApiServiceService } from '../../../../services/api-service/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListingsService {
  constructor(private _apiService: ApiServiceService) {}

  getAllProductListings(): Observable<GetProductListingsAPIResponse> {
    return this._apiService.get<GetProductListingsAPIResponse>(
      'assets/data/product-listings.json'
    );
  }
}
