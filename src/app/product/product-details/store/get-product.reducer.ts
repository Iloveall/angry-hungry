import { Action, createReducer, on } from '@ngrx/store';
import { GetProductStateInterface } from '../../types/get-product-state.interface';
import { getProductAction, getProductFailureAction, getProductSuccessAction } from './get-product.actions';

const initialState: GetProductStateInterface = {
  loading: false,
  loaded: false,
  product: null,
  error: null
};

const getProductReducer = createReducer(
  initialState,
  on(
    getProductAction,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
      product: null,
      error: null
    })
  ),
  on(
    getProductSuccessAction,
    (state, action) => ({
      ...state,
      loading: false,
      loaded: true,
      product: action.product,
      error: null
    })
  ),
  on(
    getProductFailureAction,
    (state, action) => ({
      ...state,
      loading: false,
      loaded: false,
      product: null,
      error: action.error
    })
  )
);

export const reducer = (state: GetProductStateInterface, action: Action) => getProductReducer(state, action);
