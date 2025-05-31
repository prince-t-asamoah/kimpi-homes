import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormInputComponent } from '../../../../components/form-input/form-input.component';
import telephoneCountryCodes from '../../data/country-telephone-code.data';

@Component({
  selector: 'app-customer-personal-details',
  imports: [FormInputComponent, LucideAngularModule, NgClass],
  templateUrl: './customer-personal-details.component.html',
  styleUrl: './customer-personal-details.component.scss',
})
export class CustomerPersonalDetailsComponent {
  showTelephoneDropdown = false;
  selectedCountryCode = telephoneCountryCodes[0];
  countryCodes = telephoneCountryCodes;
  @ViewChild('telephoneNumberContainer') telephoneNumberContainer!: ElementRef;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.telephoneNumberContainer?.nativeElement.contains(event.target)) {
      this.showTelephoneDropdown = false;
    }
  }

  toggleTelephoneDropdown(): void {
    this.showTelephoneDropdown = !this.showTelephoneDropdown;
  }

  selectCountryCode(code: string): void {
    if (this.selectedCountryCode === code) return;
    this.selectedCountryCode = code;
    this.toggleTelephoneDropdown();
  }
}
