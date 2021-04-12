import { ProductInterface } from './product.intefrace';
import { PaginationInterface } from '../../shared/types/pagination.interface';

export interface ProductsResponseInterface {
  products: ProductInterface[] | null;
  pagination: PaginationInterface | null;
}
