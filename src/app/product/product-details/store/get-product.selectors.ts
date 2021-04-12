import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { GetProductStateInterface } from '../../types/get-product-state.interface';

export const getProductFeatureSelector = createFeatureSelector<
  AppStateInterface,
  GetProductStateInterface
>('product');

export const getProductLoadingSelector = createSelector(
  getProductFeatureSelector,
  state => state.loading
);

export const getProductLoadedSelector = createSelector(
  getProductFeatureSelector,
  state => state.loaded
);

export const getProductSelector = createSelector(
  getProductFeatureSelector,
  state => state.product
);
