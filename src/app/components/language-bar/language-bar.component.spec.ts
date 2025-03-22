import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageBarComponent } from './language-bar.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DebugElement, ElementRef, Signal } from '@angular/core';

describe('LanguageBarComponent', () => {
  let component: LanguageBarComponent;
  let fixture: ComponentFixture<LanguageBarComponent>;
  let faIconLibrary: FaIconLibrary;
  let internationalizationForm: Signal<
    ElementRef<HTMLDialogElement> | undefined
  >;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageBarComponent);
    faIconLibrary = TestBed.inject(FaIconLibrary);
    component = fixture.componentInstance;
    internationalizationForm = fixture.componentInstance.languageBarDialog;
    debugElement = fixture.debugElement;

    faIconLibrary.addIconPacks(fas);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have internationlization form dialog', () => {
    expect(internationalizationForm()).toBeTruthy();
  });

  it('should verify open internationlization form button exist', () => {
    const openButtonEl = debugElement.nativeElement.querySelector(
      '#openLanguageFormButton'
    );
    expect(openButtonEl).toBeTruthy();
  });

  it('should show internationlization form when open internationalization button is clicked', () => {
    component.openLanguageForm();
    fixture.detectChanges();
    expect(internationalizationForm()?.nativeElement.open).toEqual(true);
  });

  it('should close internationlization form when close internationalization button is clicked', () => {
    component.closeLanguageForm();
    fixture.detectChanges();
    expect(internationalizationForm()?.nativeElement.open).toEqual(false);
  });
});
