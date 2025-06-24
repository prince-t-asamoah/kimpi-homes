import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { SupabaseService } from '../../../services/supabase/supabase.service';
import {
  CreateAccountResponse,
  ForgotPasswordResponse,
  LoginResponse,
} from '../models/auth.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = signal(false);
  private _appUrl = environment.appUrl;

  constructor(private readonly _supabaseService: SupabaseService) {}

  get isAuthenticated(): boolean {
    return this._isAuthenticated();
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated.set(value);
  }

  getformErrorsByControlName(
    controlName: string,
    formGroup: FormGroup
  ): string {
    const control = formGroup.get(controlName);
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

  toggleAllFormControlDisable(disable: boolean, formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.get(controlName);
      if (control) {
        if (disable) {
          control.disable();
        } else {
          control.enable();
        }
      }
    });
  }

  createAccount(newUser: {
    fullname: string;
    email: string;
    password: string;
  }): Observable<CreateAccountResponse> {
    return from(
      this._supabaseService.client.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: {
            full_name: newUser.fullname,
          },
        },
      })
    );
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return from(
      this._supabaseService.client.auth.signInWithPassword({
        email,
        password,
      })
    );
  }

  sendForgotPasswordEmail(email: string): Observable<ForgotPasswordResponse> {
    return from(
      this._supabaseService.client.auth.resetPasswordForEmail(email, {
        redirectTo: `${this._appUrl}/reset-password`,
      })
    );
  }
}
