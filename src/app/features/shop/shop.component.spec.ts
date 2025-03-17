import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ShopComponent } from './shop.component';
import { routes } from '../../app.routes';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let faIconLibrary: FaIconLibrary;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComponent, RouterModule.forRoot(routes), FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    faIconLibrary = TestBed.inject(FaIconLibrary);
    faIconLibrary.addIconPacks(fas);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
