import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private _supabaseUrl = environment.databaseUrl;
  private _supabaseKey = environment.databaseKey;
  public client!: SupabaseClient;

  constructor(@Inject(PLATFORM_ID) private _platformId: object) {
    this._initializeClient();
  }

  private _initializeClient(): void {
    if (!isPlatformBrowser(this._platformId)) {
      throw new Error(
        'Supabase client can only be initialized in the browser environment'
      );
    }
    if (!this._supabaseUrl || !this._supabaseKey) {
      throw new Error(
        'Supabase URL and Key must be provided in environment variables'
      );
    }
    this.client = createClient(this._supabaseUrl, this._supabaseKey);
  }
}
