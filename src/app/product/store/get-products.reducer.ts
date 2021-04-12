import { Action, createReducer, on } from '@ngrx/store';
import { GetProductsStateInterface } from '../types/get-products-state.interface';
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from './get-products.actions';

const initialState: GetProductsStateInterface = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

const getProductsReducer = createReducer(
  initialState,
  on(
    getProductsAction,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
      data: null,
      error: null
    })
  ),
  on(
    getProductsSuccessAction,
    (state, action) => ({
      ...state,
      loading: false,
      loaded: true,
      data: action.data,
      error: null
    })
  ),
  on(
    getProductsFailureAction,
    (state, action) => ({
      ...state,
      loading: false,
      loaded: false,
      data: null,
      error: action.error
    })
  )
);

export const reducer = (state: GetProductsStateInterface, action: Action) => getProductsReducer(state, action);
