import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopHomeProductsListingsComponent } from './product-listings.component';

describe('ShopHomeProductsListingsComponent', () => {
  let component: ShopHomeProductsListingsComponent;
  let fixture: ComponentFixture<ShopHomeProductsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopHomeProductsListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopHomeProductsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
