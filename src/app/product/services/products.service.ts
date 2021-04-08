import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponseInterface } from '../types/products-response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAll$(queryParams: any): Observable<ProductsResponseInterface> {
    return this.http.get<ProductsResponseInterface>('/assets/json/products.json');
  }
}
