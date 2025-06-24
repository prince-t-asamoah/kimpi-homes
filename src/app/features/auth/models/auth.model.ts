import { AuthError, AuthResponse } from '@supabase/supabase-js';

export type CreateAccountResponse = AuthResponse & {};

export type LoginResponse = AuthResponse & {};

export interface ForgotPasswordResponse {
  data: object | null;
  error: AuthError | null;
}
