import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageStockService {

  private apiUrl = 'https://cook-flow.onrender.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getStockByRestaurent(restaurentId): Promise<any> {

    return this.http.get(`${this.apiUrl}/stocks/findAllByRestaurent/${restaurentId}`).toPromise()
  }

  addStock(stock: any): Promise<any> {
    return this.http.post(`${this.apiUrl}/stocks`, stock).toPromise();
  }
}
