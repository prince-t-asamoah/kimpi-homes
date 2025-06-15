import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  public client = createClient(this.supabaseUrl, this.supabaseKey);
}
