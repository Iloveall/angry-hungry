import { GetProductCategoriesResponseInterface } from './get-product-categories-response.Interface';

export interface ProductCategoriesStateInterface {
  isLoading: boolean;
  isLoaded: boolean;
  data: GetProductCategoriesResponseInterface | null;
}
