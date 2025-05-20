import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProductsListingsComponent } from './recommended-products-listings.component';

describe('RecommendedProductsListingsComponent', () => {
  let component: RecommendedProductsListingsComponent;
  let fixture: ComponentFixture<RecommendedProductsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedProductsListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedProductsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
