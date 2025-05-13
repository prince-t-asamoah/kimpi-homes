import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterButtonComponent } from './product-filter-button.component';

describe('ProductFilterButtonComponent', () => {
  let component: ProductFilterButtonComponent;
  let fixture: ComponentFixture<ProductFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
