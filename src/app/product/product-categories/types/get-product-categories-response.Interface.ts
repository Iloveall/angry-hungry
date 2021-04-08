import { ProductCategoryInterface } from './product-category.interface';

export interface GetProductCategoriesResponseInterface {
  categories: ProductCategoryInterface[] | null;
}
