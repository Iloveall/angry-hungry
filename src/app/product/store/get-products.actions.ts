import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { ProductsResponseInterface } from '../types/products-response.interface';
import { ProductsErrorResponseInterface } from '../types/products-error-response.interface';

export const getProductsAction = createAction(
  ActionTypes.GET_PRODUCTS,
  props<{queryParams?: any}>()
);

export const getProductsSuccessAction = createAction(
  ActionTypes.GET_PRODUCTS_SUCCESS,
  props<{data: ProductsResponseInterface}>()
);

export const getProductsFailureAction = createAction(
  ActionTypes.GET_PRODUCTS_FAILURE,
  props<{error: ProductsErrorResponseInterface}>()
);
