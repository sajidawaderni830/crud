import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  addProduct(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/products', data);
  }
  updateProduct(id:number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/products/${id}`, data);
  }
  getProductList(): Observable<any> {
    return this._http.get('http://localhost:3000/products');
  }
  deleteProduct(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/products/${id}`)
    
  }
}
