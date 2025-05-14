import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNewArrivalsComponent } from './shop-new-arrivals.component';

describe('ShopNewArrivalsComponent', () => {
  let component: ShopNewArrivalsComponent;
  let fixture: ComponentFixture<ShopNewArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopNewArrivalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopNewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
