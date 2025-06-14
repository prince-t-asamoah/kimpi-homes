import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import {
  GetProductListingsAPIResponse,
  ProductSearchAPIResponse,
} from '../../model/product-listings.model';
import { ApiServiceService } from '../../../../services/api-service/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProductListingsService {
  constructor(private _apiService: ApiServiceService) {}

  getAllProductListings(): Observable<GetProductListingsAPIResponse> {
    return this._apiService
      .get<GetProductListingsAPIResponse>(
        'assets/data/products/product-listings.json'
      )
      .pipe(delay(1000));
  }

  searchProductsByQuery(): Observable<ProductSearchAPIResponse> {
    return this._apiService
      .get<ProductSearchAPIResponse>(
        `assets/data/products/search-products.json`
      )
      .pipe(delay(1000));
  }
}
