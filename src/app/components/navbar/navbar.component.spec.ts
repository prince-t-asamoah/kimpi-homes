import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from './navbar.component';
import { routes } from '../../app.routes';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let faIconLibrary: FaIconLibrary;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        RouterModule.forRoot(routes),
        FontAwesomeModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    faIconLibrary = TestBed.inject(FaIconLibrary);
    router = TestBed.inject(Router);

    faIconLibrary.addIconPacks(fas);
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

  it('should navigate to homepage when home link is clicked', async () => {
    await router.navigateByUrl('/home');
    expect(router.url).toEqual('/home');
  });
});
