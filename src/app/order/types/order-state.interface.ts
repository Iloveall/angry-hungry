import { EntityState } from '@ngrx/entity';
import { OrderProductInterface } from './product-order.interface';

export interface OrderStateInterface extends EntityState<OrderProductInterface> {
  count: number;
}
