import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastNotificationService } from '../../../components/toast/service/toast-notification.service';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, FormInputComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  private _forgotPasswordForm!: FormGroup<{
    email: FormControl<string | null>;
  }>;
  isSendResetLinkInProgress = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _toastService: ToastNotificationService
  ) {
    this._forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get forgotPasswordForm(): FormGroup {
    return this._forgotPasswordForm;
  }

  getformErrorsByControlName(controlName: string): string {
    return this._authService.getformErrorsByControlName(
      controlName,
      this._forgotPasswordForm
    );
  }

  submitForm(): void {
    if (this._forgotPasswordForm.invalid) {
      this._forgotPasswordForm.markAllAsTouched();
      return;
    }
    this.isSendResetLinkInProgress = true;
    const email = this._forgotPasswordForm.get('email')?.value;
    this._authService.sendForgotPasswordEmail(email!).subscribe({
      next: response => {
        this.isSendResetLinkInProgress = false;
        if (response.error) {
          this._toastService.show(
            'Password Rest Error',
            response.error.message,
            'error'
          );
          console.error('Error sending reset link:', response.error);
          return;
        } else {
          this._toastService.show(
            'Password Reset Link Sent',
            'Please check your email for the password reset link.',
            'success'
          );
        }
        this._forgotPasswordForm.reset();
      },
      error: error => {
        this.isSendResetLinkInProgress = false;
        this._toastService.show(
          'Password Reset Error',
          'An error occurred while sending the password reset link. Please try again later.',
          'error'
        );
        console.error('Error sending reset link:', error);
      },
    });
  }
}
