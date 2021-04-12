import { ProductCategoriesStateInterface } from '../../product/product-categories/types/product-categories-state.interface';
import { GetProductsStateInterface } from '../../product/types/get-products-state.interface';
import { GetProductStateInterface } from '../../product/types/get-product-state.interface';
import { OrderStateInterface } from '../../order/types/order-state.interface';

export interface AppStateInterface {
  productCategories?: ProductCategoriesStateInterface;
  products?: GetProductsStateInterface;
  product?: GetProductStateInterface;
  order?: OrderStateInterface;
}
