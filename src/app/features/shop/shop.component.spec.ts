import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { ShopComponent } from './shop.component';
import { routes } from '../../app.routes';
import { LucideAngularModule } from 'lucide-angular';
import iconLibrary from '../../data/icon-library';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComponent, RouterModule.forRoot(routes)],
      providers: [
        importProvidersFrom(
          LucideAngularModule.pick({
            ...iconLibrary,
          })
        ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
