import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/app-state.interface';
import { GetProductsStateInterface } from '../types/get-products-state.interface';
import { ProductInterface } from '../types/product.intefrace';

export const getProductsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  GetProductsStateInterface
>('products');

export const getProductsLoadingSelector = createSelector(
  getProductsFeatureSelector,
  state => state.loading
);

export const getProductsLoadedSelector = createSelector(
  getProductsFeatureSelector,
  state => state.loaded
);

export const getProductsDataSelector = createSelector(
  getProductsFeatureSelector,
  state => state.data
);

export const getProductsSelector = createSelector(
  getProductsFeatureSelector,
  state => state?.data?.products
);

export const getProductsPaginationSelector = createSelector(
  getProductsFeatureSelector,
  state => state.data?.pagination
);

export const getProductForIdSelector = createSelector(
  getProductsFeatureSelector,
  (state: GetProductsStateInterface, props: { id: number; }) =>
    state.data?.products?.find((product: ProductInterface) => product.id === props.id)
);

export const getHasProductsSelector = createSelector(
  getProductsFeatureSelector,
  state => (state.data?.products || []).length > 0
);
