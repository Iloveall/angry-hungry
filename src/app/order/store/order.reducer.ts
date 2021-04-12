import { OrderStateInterface } from '../types/order-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addProductToOrderAction, updateProductOrderAction, removeProductFromOrderAction } from './order.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { OrderProductInterface } from '../types/product-order.interface';

const selectProductId = (orderProduct: OrderProductInterface) => orderProduct.product.id;

export const adapter: EntityAdapter<OrderProductInterface> = createEntityAdapter<OrderProductInterface>({
  selectId: selectProductId
});

const initialState: OrderStateInterface = adapter.getInitialState({
  count: 0
});

const orderReducer = createReducer(
  initialState,
  on(
    addProductToOrderAction,
    (state, { orderProduct }) => adapter.upsertOne(orderProduct, state)
  ),
  on(
    updateProductOrderAction,
    (state, { updateOrderProduct }) =>
      adapter.updateOne(updateOrderProduct,  state)
  ),
  on(
    removeProductFromOrderAction,
    (state, { id }) => adapter.removeOne(id, state)
  )
);

export const reducer = (state: OrderStateInterface, action: Action) => orderReducer(state, action);
