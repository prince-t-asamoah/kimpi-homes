import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPaginationButtonsComponent } from './products-pagination-buttons.component';

describe('ProductsPaginationButtonsComponent', () => {
  let component: ProductsPaginationButtonsComponent;
  let fixture: ComponentFixture<ProductsPaginationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPaginationButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPaginationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
