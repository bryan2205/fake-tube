import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get(path: any) {
    return this.http.get<any>(`${environment.YT_BASE}${path}`);
  }
}
