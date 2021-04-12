import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { OrderProductInterface } from '../types/product-order.interface';
import { Update } from '@ngrx/entity';

export const addProductToOrderAction = createAction(
  ActionTypes.ADD_PRODUCT_TO_ORDER,
  props<{orderProduct: OrderProductInterface}>()
);

export const updateProductOrderAction = createAction(
  ActionTypes.UPDATE_PRODUCT_TO_ORDER,
  props<{updateOrderProduct: Update<OrderProductInterface>}>()
);

export const removeProductFromOrderAction = createAction(
  ActionTypes.REMOVE_PRODUCT_TO_ORDER,
  props<{id: number}>()
);
