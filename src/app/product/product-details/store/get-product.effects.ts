import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getProductAction, getProductFailureAction, getProductSuccessAction } from './get-product.actions';
import { ProductService } from '../product.service';
import { ProductInterface } from '../../types/product.intefrace';

@Injectable()
export class GetProductEffects {
  getProduct$ = createEffect(() => this.actions$.pipe(
    ofType(getProductAction),
    switchMap((action) => this.productService.get$(action.id).pipe(
      map((product: ProductInterface) => getProductSuccessAction({ product })),
      catchError((error) => of(getProductFailureAction({ error })))
    ))
  ));

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}
