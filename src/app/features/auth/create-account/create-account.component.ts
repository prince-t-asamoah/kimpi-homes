import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { FormCheckboxComponent } from '../../../components/form-checkbox/form-checkbox.component';
import { ToastNotificationService } from '../../../components/toast/service/toast-notification.service';
import { AuthFormValidators } from '../validators/auth-form.validators';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-create-account',
  imports: [
    RouterLink,
    FormInputComponent,
    FormCheckboxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {
  private _createAccountForm!: FormGroup<{
    fullname: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
    agreedToTerms: FormControl<boolean | null>;
  }>;
  isSignUpInProgress = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _toastService: ToastNotificationService
  ) {
    this._createAccountForm = this._formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          AuthFormValidators.passwordMismatch,
        ],
      ],
      agreedToTerms: [false, Validators.requiredTrue],
    });
  }

  get createAccountForm(): FormGroup {
    return this._createAccountForm;
  }

  get formControls() {
    return this._createAccountForm.controls;
  }

  getformErrorsByControlName(controlName: string): string {
    const control = this._createAccountForm.get(controlName);
    if (!control || !control.errors || !control.touched) return '';
    if (control.errors['required']) {
      return 'This field is required';
    }

    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (control.errors['minlength']) {
      return `Minimum length must be ${control.errors['minlength'].requiredLength} characters`;
    }
    if (control.errors['passwordMismatch']) {
      return 'Passwords do not match';
    }
    if (control.errors['requiredTrue']) {
      return 'You must accept the terms and conditions';
    }
    return '';
  }

  resetCreateAccountForm(): void {
    this._createAccountForm.reset({
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreedToTerms: false,
    });
  }

  toggleAllFormControlDisable(disable: boolean): void {
    Object.keys(this._createAccountForm.controls).forEach(controlName => {
      const control = this._createAccountForm.get(controlName);
      if (control) {
        if (disable) {
          control.disable();
        } else {
          control.enable();
        }
      }
    });
  }

  submitForm(): void {
    if (this._createAccountForm.invalid) {
      this._createAccountForm.markAllAsTouched();
      return;
    }
    const { fullname, email, password } = this._createAccountForm.value;
    this.isSignUpInProgress = true;
    this.toggleAllFormControlDisable(true);
    this._authService
      .createAccount({
        fullname: fullname ?? '',
        email: email ?? '',
        password: password ?? '',
      })
      .subscribe({
        next: response => {
          this.isSignUpInProgress = false;
          this.toggleAllFormControlDisable(false);
          if (response.error) {
            this._toastService.show(
              'Error',
              'Account creation failed, try again later',
              'error'
            );
            console.error('Error creating account:', response.error);
          } else {
            this._toastService.show(
              'Success',
              'Account created sucessfully',
              'success'
            );
            this.resetCreateAccountForm();
          }
        },
        error: error => {
          this.isSignUpInProgress = false;
          this.toggleAllFormControlDisable(false);
          this._toastService.show(
            'Error',
            error.message || 'An error occurred while creating the account',
            'error'
          );
          console.error('Error creating account:', error);
        },
      });
  }
}
