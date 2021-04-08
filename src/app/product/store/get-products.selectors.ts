import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/app-state.interface';
import { GetProductsStateInterface } from '../types/get-products-state.interface';

export const getProductsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  GetProductsStateInterface
>('products');

export const getProductsDataSelector = createSelector(
  getProductsFeatureSelector,
  state => state.data
);

export const getProductsSelector = createSelector(
  getProductsFeatureSelector,
  state => state?.data?.products
);
