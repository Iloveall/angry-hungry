import { ProductsResponseInterface } from './products-response.interface';
import { ProductsErrorResponseInterface } from './products-error-response.interface';

export interface GetProductsStateInterface {
  loading: boolean;
  loaded: boolean;
  data: ProductsResponseInterface | null;
  error: ProductsErrorResponseInterface | null;
}
