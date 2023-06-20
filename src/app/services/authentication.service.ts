import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  login(credential): Promise<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credential).toPromise()
  }
}
