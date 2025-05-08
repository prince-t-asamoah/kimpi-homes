import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterDualSliderComponent } from './filter-dual-slider.component';

describe('FilterDualSliderComponent', () => {
  let component: FilterDualSliderComponent;
  let fixture: ComponentFixture<FilterDualSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDualSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDualSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
