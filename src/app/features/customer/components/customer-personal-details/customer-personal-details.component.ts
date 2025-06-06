import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormInputComponent } from '../../../../components/form-input/form-input.component';
import telephoneCountryCodes from '../../data/country-telephone-code.data';
import { CountryTelephoneData } from '../../model/personal-details.model';

@Component({
  selector: 'app-customer-personal-details',
  imports: [FormInputComponent, LucideAngularModule, NgClass],
  templateUrl: './customer-personal-details.component.html',
  styleUrls: [
    './customer-personal-details.component.scss',
    '../../scss/customer-form.scss',
  ],
})
export class CustomerPersonalDetailsComponent {
  showTelephoneDropdown = false;
  selectedCountryData = telephoneCountryCodes[0];
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

  selectCountry(country: CountryTelephoneData): void {
    if (this.selectedCountryData.code === country.code) return;
    this.selectedCountryData = country;
    this.toggleTelephoneDropdown();
  }
}
