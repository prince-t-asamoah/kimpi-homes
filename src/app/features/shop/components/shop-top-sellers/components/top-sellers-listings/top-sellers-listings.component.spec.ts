import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSellersListingsComponent } from './top-sellers-listings.component';

describe('TopSellersListingsComponent', () => {
  let component: TopSellersListingsComponent;
  let fixture: ComponentFixture<TopSellersListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellersListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopSellersListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
