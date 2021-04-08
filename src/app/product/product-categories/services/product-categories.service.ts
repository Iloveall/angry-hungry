import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductCategoriesResponseInterface } from '../types/get-product-categories-response.Interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http: HttpClient) {
  }

  getAll$(): Observable<GetProductCategoriesResponseInterface> {
    return this.http.get<GetProductCategoriesResponseInterface>('/assets/json/categories.json');
  }
}
