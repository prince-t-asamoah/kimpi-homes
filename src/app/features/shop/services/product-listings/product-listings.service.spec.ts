import { TestBed } from '@angular/core/testing';
import { ProductListingsService } from './product-listings.service';

describe('ProductListingsService', () => {
  let service: ProductListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
