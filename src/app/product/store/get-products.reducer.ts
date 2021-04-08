import { Action, createReducer, on } from '@ngrx/store';
import { GetProductsStateInterface } from '../types/get-products-state.interface';
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from './get-products.actions';

const initialState: GetProductsStateInterface = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null
};

const getProductsReducer = createReducer(
  initialState,
  on(
    getProductsAction,
    (state) => ({
      ...state,
      isLoading: true,
      isLoaded: false,
      data: null,
      error: null
    })
  ),
  on(
    getProductsSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      isLoaded: true,
      data: action.data,
      error: null
    })
  ),
  on(
    getProductsFailureAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      isLoaded: false,
      data: null,
      error: action.error
    })
  )
);

export const reducer = (state: GetProductsStateInterface, action: Action) => getProductsReducer(state, action);
