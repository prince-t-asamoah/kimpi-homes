import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormInputComponent } from '../../../components/form-input/form-input.component';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, FormInputComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {}
