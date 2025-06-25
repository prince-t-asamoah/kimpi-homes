import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SupabaseService } from '../../../services/supabase/supabase.service';
import {
  CreateAccountResponse,
  ForgotPasswordResponse,
  LoginResponse,
  LogoutResponse,
} from '../models/auth.api.model';
import { environment } from '../../../../environments/environment';
import { AuthStoreState } from '../models/auth.store.model';
import { updateAuthState } from '../auth.store.reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _appUrl = environment.appUrl;

  constructor(
    private readonly _supabaseService: SupabaseService,
    private readonly _store: Store<AuthStoreState>
  ) {}

  setAuthData({
    isAuthenticated,
    user,
  }: {
    isAuthenticated: boolean;
    user: AuthStoreState['user'];
  }): void {
    this._store.dispatch(updateAuthState({ isAuthenticated, user }));
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

  logout(): Observable<LogoutResponse> {
    return from(this._supabaseService.client.auth.signOut());
  }

  sendForgotPasswordEmail(email: string): Observable<ForgotPasswordResponse> {
    return from(
      this._supabaseService.client.auth.resetPasswordForEmail(email, {
        redirectTo: `${this._appUrl}/reset-password`,
      })
    );
  }

  resetPassword(password: string): Observable<ForgotPasswordResponse> {
    return from(
      this._supabaseService.client.auth.updateUser({
        password,
      })
    );
  }
}
