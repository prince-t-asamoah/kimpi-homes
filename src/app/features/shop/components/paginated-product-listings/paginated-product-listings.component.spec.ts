import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatedProductListingsComponent } from './paginated-product-listings.component';

describe('PaginatedProductListingsComponent', () => {
  let component: PaginatedProductListingsComponent;
  let fixture: ComponentFixture<PaginatedProductListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedProductListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatedProductListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
