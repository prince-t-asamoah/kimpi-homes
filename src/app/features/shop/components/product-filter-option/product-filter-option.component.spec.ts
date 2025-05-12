import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFilterOptionComponent } from './product-filter-option.component';

describe('ProductFilterOptionComponent', () => {
  let component: ProductFilterOptionComponent;
  let fixture: ComponentFixture<ProductFilterOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFilterOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
