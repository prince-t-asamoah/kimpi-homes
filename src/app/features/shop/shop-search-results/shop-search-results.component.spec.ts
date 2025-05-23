import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSearchResultsComponent } from './shop-search-results.component';

describe('ShopSearchResultsComponent', () => {
  let component: ShopSearchResultsComponent;
  let fixture: ComponentFixture<ShopSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopSearchResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
