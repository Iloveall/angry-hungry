import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from '../../product/store/get-products.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsResponseInterface } from '../../product/types/products-response.interface';
import { ProductsErrorResponseInterface } from '../../product/types/products-error-response.interface';
import { of } from 'rxjs';
import { ProductsService } from '../../product/services/products.service';
import { addProductToOrderAction } from './order.actions';

export class OrderEffects {
/*  saveOrder$ = createEffect(() => this.actions$.pipe(
    ofType(addProductToOrderAction),
    switchMap((action) => this.productsService.get$(action.queryParams).pipe(
      map((response: ProductsResponseInterface) => getProductsSuccessAction({data: response})),
      catchError((error: ProductsErrorResponseInterface) => of(getProductsFailureAction({error})))
    ))
  ));*/

  constructor(private actions$: Actions, private productsService: ProductsService) {
  }
}
