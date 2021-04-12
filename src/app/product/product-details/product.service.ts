import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductInterface } from '../types/product.intefrace';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get$(id: number): Observable<ProductInterface> {
    const url = `${environment.apiUrl}/products/${id}`;

    return this.http.get<ProductInterface>(url);
  }
}
