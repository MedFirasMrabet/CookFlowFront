import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangeStaffService {

  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getStaffByRestaurent(restaurentId): Promise<any> {
    console.log(`${this.apiUrl}auth/findAllByRestaurent/${restaurentId}`,'fsdfsdfsdfsdf');
    
    return this.http.get(`${this.apiUrl}/auth/findAllByRestaurent/${restaurentId}`).toPromise()
  }

  addStaff(staff: any): Promise<any> {
    console.log(`${this.apiUrl}/auth/addStaff`);
    
    return this.http.post(`${this.apiUrl}/auth/addStuff`, staff).toPromise();
  }
}