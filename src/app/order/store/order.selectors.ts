import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/app-state.interface';
import { OrderStateInterface } from '../types/order-state.interface';
import { adapter } from './order.reducer';

export const orderFeatureSelector = createFeatureSelector<AppStateInterface,
  OrderStateInterface>('order');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(orderFeatureSelector);

export const orderProductsSelector = selectAll;

export const orderProductsTotalPriceSelector = createSelector(
  selectAll,
  orderProducts => orderProducts.reduce((acc, orderProduct) =>
    acc + Number(orderProduct.product.price) * orderProduct.amount, 0)
);

export const hasProductsSelector = createSelector(selectTotal, total => total > 0);

export const totalProductsSelector = selectTotal;
