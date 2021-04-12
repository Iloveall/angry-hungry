import { ProductInterface } from '../../product/types/product.intefrace';

export interface OrderProductOptionInterface {
  id: number;
  count: number;
}

export interface OrderProductInterface {
  amount: number;
  product: ProductInterface;
  options?: OrderProductOptionInterface[];
}
