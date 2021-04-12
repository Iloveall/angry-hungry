import { ProductInterface } from '../../product/types/product.intefrace';

export interface OrderProductOptionInterface {
  id: number;
  amount: number;
  price: string;
}

export interface OrderProductInterface {
  amount: number;
  product: ProductInterface;
  options: OrderProductOptionInterface[];
}
