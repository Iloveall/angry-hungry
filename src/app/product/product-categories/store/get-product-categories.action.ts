import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { GetProductCategoriesResponseInterface } from '../types/get-product-categories-response.Interface';

export const getProductCategoriesAction = createAction(
  ActionTypes.GET_PRODUCT_CATEGORIES
);

export const getProductCategoriesSuccessAction = createAction(
  ActionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
  props<{ categoriesResponse: GetProductCategoriesResponseInterface }>()
);

export const getProductCategoriesFailureAction = createAction(
  ActionTypes.GET_PRODUCT_CATEGORIES_FAILURE
);
