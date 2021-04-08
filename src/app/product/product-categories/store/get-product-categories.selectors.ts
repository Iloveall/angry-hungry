import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { ProductCategoriesStateInterface } from '../types/product-categories-state.interface';
import { GetProductCategoriesResponseInterface } from '../types/get-product-categories-response.Interface';
import { ProductCategoryInterface } from '../types/product-category.interface';

export const productCategoriesFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ProductCategoriesStateInterface
>('productCategories');

export const productCategoriesIsLoadingSelector = createSelector(
  productCategoriesFeatureSelector,
  (productCategoriesState: ProductCategoriesStateInterface) => productCategoriesState.isLoading
);

export const productCategoriesDataSelector = createSelector(
  productCategoriesFeatureSelector,
  (productCategoriesState: ProductCategoriesStateInterface): GetProductCategoriesResponseInterface | null => productCategoriesState.data
);

export const productCategoriesSelector = createSelector(
  productCategoriesFeatureSelector,
  (productCategoriesResponse: ProductCategoriesStateInterface): ProductCategoryInterface[] | null | undefined =>
    productCategoriesResponse?.data?.categories
);
