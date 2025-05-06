import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListingsCardComponent } from './product-listings-card.component';

describe('ProductListingsCardComponent', () => {
  let component: ProductListingsCardComponent;
  let fixture: ComponentFixture<ProductListingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListingsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
