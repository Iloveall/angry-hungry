import { ProductInterface } from './product.intefrace';

export interface GetProductStateInterface {
  loading: boolean;
  loaded: boolean;
  product: ProductInterface | null;
  error: string | null;
}
