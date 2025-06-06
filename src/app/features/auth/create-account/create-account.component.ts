import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { FormCheckboxComponent } from '../../../components/form-checkbox/form-checkbox.component';

@Component({
  selector: 'app-create-account',
  imports: [RouterLink, FormInputComponent, FormCheckboxComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {}
