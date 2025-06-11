import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSearchSuggestionsComponent } from './product-search-suggestions.component';

describe('ProductSearchSuggestionsComponent', () => {
  let component: ProductSearchSuggestionsComponent;
  let fixture: ComponentFixture<ProductSearchSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchSuggestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
