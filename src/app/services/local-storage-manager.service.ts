import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class LocalStorageManagerService {
  decodedToken: { [key: string]: string };

  constructor() {
  }
  private readonly TOKEN_KEY = 'token';

  getToken(): any | null {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getDecodeToken() {
    if (this.getToken()) {
      const token = this.getToken()
      this.decodedToken = jwt_decode(token.access_token);
    }
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }



  getUser() {
    
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken : null;
  }

  getEmail() {
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.getDecodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime = parseInt(this.getExpiryTime());
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
