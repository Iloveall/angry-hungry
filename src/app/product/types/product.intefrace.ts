import { ProductOptionInterface } from './product-option.intefrace';

export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  options: ProductOptionInterface[];
}
