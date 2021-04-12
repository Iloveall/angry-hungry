import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/app-state.interface';
import { OrderStateInterface } from '../types/order-state.interface';
import { adapter } from './order.reducer';
import { Dictionary } from '@ngrx/entity';
import { OrderProductInterface, OrderProductOptionInterface } from '../types/product-order.interface';

const calculateTotalForOptions = (orderProductOptions: OrderProductOptionInterface[] = [], amount: number = 1): number => {
  return orderProductOptions.reduce((total, option) =>
    total + ((Number(option.price) * option.amount) * amount), 0);
};

const calculateTotalForOrderProducts = (orderProducts: OrderProductInterface[] = []): number => {
  return orderProducts.reduce((total, orderProduct) => total +
    ((Number(orderProduct.product.price) * orderProduct.amount) + calculateTotalForOptions(orderProduct.options, orderProduct.amount)), 0);
};

export const orderFeatureSelector = createFeatureSelector<AppStateInterface,
  OrderStateInterface>('order');

const {
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(orderFeatureSelector);

export const orderProductsSelector = selectAll;

export const orderProductsTotalPriceSelector = createSelector(
  selectAll,
  calculateTotalForOrderProducts
);

export const hasProductsSelector = createSelector(selectTotal, total => total > 0);

export const totalProductsSelector = selectTotal;

export const hasOrderProductForIdSelector = createSelector(
  selectEntities,
  (products: Dictionary<OrderProductInterface>, props: { id: number }) => !!products[props.id]
);

export const totalPriceOfOrderProductOptionsSelector = createSelector(
  selectEntities,
  (products: Dictionary<OrderProductInterface>, props: { id: number }): number => {
    const currentProduct = products[props.id];
    return currentProduct ? calculateTotalForOptions(currentProduct.options, currentProduct.amount) : 0;
  }
);

export const totalPriceOfOrderProductSelector = createSelector(
  selectEntities,
  (products: Dictionary<OrderProductInterface>, props: { id: number }): number => {
    const currentProduct = products[props.id];
    return currentProduct ? Number(currentProduct.product.price) * currentProduct.amount : 0;
  }
);

export const getOrderProductSelector = createSelector(
  selectEntities,
  (products: Dictionary<OrderProductInterface>, props: { id: number }): OrderProductInterface | undefined => products[props.id]
);
