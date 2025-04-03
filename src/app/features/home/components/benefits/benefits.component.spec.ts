import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { BenefitsComponent } from './benefits.component';
import iconLibrary from '../../../../data/icon-library';

describe('BenefitsComponent', () => {
  let component: BenefitsComponent;
  let fixture: ComponentFixture<BenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsComponent],
      providers: [
        importProvidersFrom(
          LucideAngularModule.pick({
            ...iconLibrary,
          })
        ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
