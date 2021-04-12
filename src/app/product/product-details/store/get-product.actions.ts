import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { ProductInterface } from '../../types/product.intefrace';

export const getProductAction = createAction(
  ActionTypes.GET_PRODUCT,
  props<{id: number}>()
);

export const getProductSuccessAction = createAction(
  ActionTypes.GET_PRODUCT_SUCCESS,
  props<{product: ProductInterface}>()
);

export const getProductFailureAction = createAction(
  ActionTypes.GET_PRODUCT_FAILURE,
  props<{error: string}>()
);
