import { ProductCategoriesStateInterface } from '../../product/product-categories/types/product-categories-state.interface';
import { GetProductsStateInterface } from '../../product/types/get-products-state.interface';

export interface AppStateInterface {
  productCategories?: ProductCategoriesStateInterface;
  products?: GetProductsStateInterface;
}
