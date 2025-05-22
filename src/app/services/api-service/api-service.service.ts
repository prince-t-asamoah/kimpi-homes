import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = '';

  constructor(private _httpClient: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this._httpClient.get<T>(`${this.apiUrl}/${endpoint}`);
  }
}
