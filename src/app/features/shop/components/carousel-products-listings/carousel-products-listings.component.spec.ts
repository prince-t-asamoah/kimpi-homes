import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductsListingsComponent } from './carousel-products-listings.component';

describe('CarouselProductsListingsComponent', () => {
  let component: CarouselProductsListingsComponent;
  let fixture: ComponentFixture<CarouselProductsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselProductsListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselProductsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
