import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { routes } from '../../app.routes';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import iconLibrary from '../../data/icon-library';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterModule.forRoot(routes)],
      providers: [
        importProvidersFrom(
          LucideAngularModule.pick({
            ...iconLibrary,
          })
        ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

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

  it('should navigate to shop page when shop link is clicked', async () => {
    await router.navigateByUrl('/shop');
    expect(router.url).toEqual('/shop');
  });
});
