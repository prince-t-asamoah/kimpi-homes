import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalsListingsComponent } from './new-arrivals-listings.component';

describe('NewArrivalsListingsComponent', () => {
  let component: NewArrivalsListingsComponent;
  let fixture: ComponentFixture<NewArrivalsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArrivalsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
