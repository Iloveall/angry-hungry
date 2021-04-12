import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductCategoriesResponseInterface } from '../types/get-product-categories-response.Interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http: HttpClient) {
  }

  getAll$(): Observable<GetProductCategoriesResponseInterface> {
    const url = `${environment.apiUrl}/product-categories`;

    return this.http.get<GetProductCategoriesResponseInterface>(url);
  }
}
