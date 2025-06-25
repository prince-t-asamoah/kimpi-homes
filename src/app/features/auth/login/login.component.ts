import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { AuthService } from '../services/auth.service';
import { ToastNotificationService } from '../../../components/toast/service/toast-notification.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _loginForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  isLoginInProgress = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _toastService: ToastNotificationService,
    private readonly _router: Router
  ) {
    this._loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  get formControls() {
    return this._loginForm.controls;
  }

  getFormErrorsByControlName(controlName: string): string {
    return this._authService.getformErrorsByControlName(
      controlName,
      this._loginForm
    );
  }

  toggleAllFormControlDisable(disable: boolean): void {
    this._authService.toggleAllFormControlDisable(disable, this._loginForm);
  }

  submitForm(): void {
    if (this._loginForm.invalid) {
      this._loginForm.markAllAsTouched();
      return;
    }
    const { email, password } = this._loginForm.value;

    this.isLoginInProgress = true;
    this._authService.login(email!, password!).subscribe({
      next: response => {
        this.isLoginInProgress = false;
        this.toggleAllFormControlDisable(false);
        if (response.error) {
          this._toastService.show(
            'Login Failed',
            'An error occurred while logging in. Please check your credentials and try again.',
            'error'
          );
          console.error('Error creating account:', response.error);
        } else {
          this._toastService.show(
            'Login Successful',
            'You have successfully logged in.',
            'success'
          );
          this._authService.setAuthData({
            isAuthenticated: true,
            user: response.data.user,
          });
          this._router.navigate(['/']);
        }
      },
      error: error => {
        this.isLoginInProgress = false;
        this.toggleAllFormControlDisable(false);
        this._toastService.show(
          'Login Failed',
          'An unexpected error occurred. Please try again later.',
          'error'
        );
        console.error('An error occurred during login:', error);
      },
    });
  }
}
