import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormInputComponent } from '../../../components/form-input/form-input.component';

@Component({
  selector: 'app-reset-password',
  imports: [RouterModule, FormInputComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {}
