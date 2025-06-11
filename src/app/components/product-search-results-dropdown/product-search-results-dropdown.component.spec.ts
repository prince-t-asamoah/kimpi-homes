import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSearchResultsDropdownComponent } from './product-search-results-dropdown.component';

describe('ProductSearchResultsDropdownComponent', () => {
  let component: ProductSearchResultsDropdownComponent;
  let fixture: ComponentFixture<ProductSearchResultsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchResultsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchResultsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
