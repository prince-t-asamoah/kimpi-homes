import { Component } from '@angular/core';
import { FormSelectComponent } from '../../../../components/form-select/form-select.component';
import { FormInputComponent } from '../../../../components/form-input/form-input.component';
import { FormCheckboxComponent } from '../../../../components/form-checkbox/form-checkbox.component';
import countries from '../../data/country-telephone-code.data';

@Component({
  selector: 'app-customer-address',
  imports: [FormSelectComponent, FormInputComponent, FormCheckboxComponent],
  templateUrl: './customer-address.component.html',
  styleUrls: [
    '../../scss/customer-shared.scss',
    './customer-address.component.scss',
  ],
})
export class CustomerAddressComponent {
  countriesOptions: { value: string; label: string }[] = [];

  constructor() {
    this.countriesOptions = countries.map(country => ({
      value: country.code,
      label: country.country,
    }));

    this.countriesOptions.unshift({
      value: '',
      label: 'Select Country',
    });
  }
}
