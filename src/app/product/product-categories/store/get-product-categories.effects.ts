import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductCategoriesService } from '../services/product-categories.service';
import {
  getProductCategoriesAction,
  getProductCategoriesFailureAction,
  getProductCategoriesSuccessAction
} from './get-product-categories.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetProductCategoriesResponseInterface } from '../types/get-product-categories-response.Interface';

@Injectable()
export class GetProductCategoriesEffects {
  getProductCategories$ = createEffect(() => this.actions$.pipe(
    ofType(getProductCategoriesAction),
    switchMap(() =>
      this.productCategoriesService.getAll$().pipe(
        map((categoriesResponse: GetProductCategoriesResponseInterface) =>
          getProductCategoriesSuccessAction({ categoriesResponse })
        ),
        catchError(() => of(getProductCategoriesFailureAction()))
      )
    )
  ));

  constructor(private actions$: Actions, private productCategoriesService: ProductCategoriesService) {
  }
}
