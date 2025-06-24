import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { ToastNotificationService } from '../../../components/toast/service/toast-notification.service';
import { AuthService } from '../services/auth.service';
import { AuthFormValidators } from '../validators/auth-form.validators';

@Component({
  selector: 'app-reset-password',
  imports: [RouterModule, FormInputComponent, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  private _resetPasswordForm!: FormGroup<{
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;
  isResetPasswordInProgress = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _toastService: ToastNotificationService,
    private readonly _router: Router
  ) {
    this._resetPasswordForm = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          AuthFormValidators.passwordMismatch,
        ],
      ],
    });
  }

  get resetPasswordForm(): FormGroup {
    return this._resetPasswordForm;
  }

  getformErrorsByControlName(controlName: string): string {
    return this._authService.getformErrorsByControlName(
      controlName,
      this._resetPasswordForm
    );
  }

  toggleAllFormControlDisable(disable: boolean): void {
    this._authService.toggleAllFormControlDisable(
      disable,
      this._resetPasswordForm
    );
  }

  submitForm(): void {
    if (this._resetPasswordForm.invalid) {
      this._resetPasswordForm.markAllAsTouched();
      return;
    }
    this.isResetPasswordInProgress = true;
    this.toggleAllFormControlDisable(true);
    const { password } = this._resetPasswordForm.value;

    this._authService.resetPassword(password!).subscribe({
      next: response => {
        this.isResetPasswordInProgress = false;
        this.toggleAllFormControlDisable(true);
        if (response.error) {
          this._toastService.show(
            'Reset Password Error',
            response.error.message,
            'error'
          );
        } else {
          this._toastService.show(
            'Reset Password Success',
            'Your password has been reset successfully.',
            'success'
          );
          this._resetPasswordForm.reset();
          this._router.navigate(['/login']);
        }
      },
      error: error => {
        this.isResetPasswordInProgress = false;
        this.toggleAllFormControlDisable(false);
        this._toastService.show(
          'Reset Password Error',
          error.message || 'An unexpected error occurred.',
          'error'
        );
      },
    });
  }
}
