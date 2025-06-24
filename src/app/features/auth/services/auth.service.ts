import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../services/supabase/supabase.service';
import { CreateAccountResponse } from '../models/auth.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _supabaseService: SupabaseService) {}

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
}
