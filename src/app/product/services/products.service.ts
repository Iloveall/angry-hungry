import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponseInterface } from '../types/products-response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  get$(queryParams: any): Observable<ProductsResponseInterface> {
    const url = `${environment.apiUrl}/products`;

    return this.http.get<ProductsResponseInterface>(url, {params: queryParams});
  }
}
