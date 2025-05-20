import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopTopSellersComponent } from './shop-top-sellers.component';

describe('ShopTopSellersComponent', () => {
  let component: ShopTopSellersComponent;
  let fixture: ComponentFixture<ShopTopSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopTopSellersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopTopSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
