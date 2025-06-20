import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../../../services/supabase/supabase.service';
import { CreateAccountResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabaseService = inject(SupabaseService);

  async createAccount(newUser: {
    fullname: string;
    email: string;
    password: string;
  }): Promise<CreateAccountResponse> {
    return await this.supabaseService.client.auth.signUp({
      email: newUser.email,
      password: newUser.password,
      options: {
        data: {
          full_name: newUser.fullname,
        },
      },
    });
  }
}
