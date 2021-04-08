import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { productCategoriesSelector } from './store/get-product-categories.selectors';
import { Observable } from 'rxjs';
import { ProductCategoryInterface } from './types/product-category.interface';
import { getProductCategoriesAction } from './store/get-product-categories.action';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  productCategories$: Observable<ProductCategoryInterface[] | null | undefined> | undefined;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(getProductCategoriesAction());

    this.productCategories$ = this.store$.pipe(
      select(productCategoriesSelector)
    );
  }

}
