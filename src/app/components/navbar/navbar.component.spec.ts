import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showMainNavigation', () => {
    expect(component.showMainNavigation).toBeFalse();
    component.toggleMainNavigation();
    expect(component.showMainNavigation).toBeTrue();
  });

  it('should toggle showSearchBar', () => {
    expect(component.showSearchProductBar).toBeFalse();
    component.toggleSearchProductBar();
    expect(component.showSearchProductBar).toBeTrue();
  });
});
