import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageTechnicalFileService {

  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getFilesByRestaurent(restaurentId): Promise<any> {
    return this.http.get(`${this.apiUrl}/technical-file/${restaurentId}`).toPromise()
  }

  async uploadFile(formData: any): Promise<any> {
    return await this.http.post(`${this.apiUrl}/technical-file/upload`, formData).toPromise()
  }
}
