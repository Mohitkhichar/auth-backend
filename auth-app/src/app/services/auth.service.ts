import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // ✅ dynamic backend URL (important for Codespaces)
  // private baseUrl = window.location.origin.replace('4200', '8080');
  private baseUrl = window.location.origin;

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/signup`, data, { responseType: 'text' });
  }

  signin(data: any) {
    return this.http.post<any>(`${this.baseUrl}/signin`, data);
  }

  getDashboard() {
    return this.http.get(`${this.baseUrl}/dashboard-data`);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  logoutApi() {
    return this.http.post(`${this.baseUrl}/logout`, {}, { responseType: 'text' });
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}