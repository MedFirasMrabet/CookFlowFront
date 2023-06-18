import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class LocalStorageManagerService {
  decodedToken: { [key: string]: string };

  constructor() {
  }
  private readonly TOKEN_KEY = 'token';

  getToken(): string | null {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  decodeToken() {
    if (this.getToken()) {
      this.decodedToken = jwt_decode(this.getToken());
    }
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getDecodeToken() {
    return jwt_decode(this.getToken());
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.displayname : null;
  }

  getEmail() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();
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
