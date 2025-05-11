import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopBreadcrumbComponent } from './shop-breadcrumb.component';

describe('ShopBreadcrumbComponent', () => {
  let component: ShopBreadcrumbComponent;
  let fixture: ComponentFixture<ShopBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopBreadcrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
