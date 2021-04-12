import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../services/products.service';
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from './get-products.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsResponseInterface } from '../types/products-response.interface';
import { ProductsErrorResponseInterface } from '../types/products-error-response.interface';
import { of } from 'rxjs';

@Injectable()
export class GetProductsEffects {
  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap((action) => this.productsService.get$(action.queryParams).pipe(
      map((response: ProductsResponseInterface) => getProductsSuccessAction({data: response})),
      catchError((error: ProductsErrorResponseInterface) => of(getProductsFailureAction({error})))
    ))
  ));

  constructor(private actions$: Actions, private productsService: ProductsService) {
  }
}
