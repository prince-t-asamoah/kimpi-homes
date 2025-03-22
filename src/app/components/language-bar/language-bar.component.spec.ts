import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageBarComponent } from './language-bar.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

describe('LanguageBarComponent', () => {
  let component: LanguageBarComponent;
  let fixture: ComponentFixture<LanguageBarComponent>;
  let faIconLibrary: FaIconLibrary;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageBarComponent);
    faIconLibrary = TestBed.inject(FaIconLibrary);
    component = fixture.componentInstance;

    faIconLibrary.addIconPacks(fas);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have internationlization form dialog', () => {
    expect(component.languageBarDialog).toBeTruthy();
  });
});
