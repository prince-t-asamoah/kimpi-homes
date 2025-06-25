import { AuthResponse } from '@supabase/supabase-js';

export interface AuthStoreState {
  isAuthenticated: boolean;
  user: AuthResponse['data']['user'];
}
