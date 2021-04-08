import { Action, createReducer, on } from '@ngrx/store';
import {
  getProductCategoriesAction,
  getProductCategoriesFailureAction,
  getProductCategoriesSuccessAction
} from './get-product-categories.action';
import { ProductCategoriesStateInterface } from '../types/product-categories-state.interface';

const initialState: ProductCategoriesStateInterface = {
  isLoading: false,
  isLoaded: false,
  data: null
};

const productCategoriesReducer = createReducer(
  initialState,
  on(
    getProductCategoriesAction,
    (state): ProductCategoriesStateInterface => ({
      ...state,
      isLoading: true,
      isLoaded: false,
    })
  ),
  on(
    getProductCategoriesSuccessAction,
    (state, action): ProductCategoriesStateInterface => ({
      ...state,
      isLoading: false,
      isLoaded: true,
      data: action.categoriesResponse
    })
  ),
  on(
    getProductCategoriesFailureAction,
    (state): ProductCategoriesStateInterface => ({
      ...state,
      isLoading: false,
      isLoaded: false,
    })
  )
);

export const reducer = (state: ProductCategoriesStateInterface, action: Action) => {
  return productCategoriesReducer(state, action);
};
