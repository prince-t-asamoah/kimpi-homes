import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderHistoryTableComponent } from './order-history-table.component';

describe('OrderHistoryTableComponent', () => {
  let component: OrderHistoryTableComponent;
  let fixture: ComponentFixture<OrderHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
