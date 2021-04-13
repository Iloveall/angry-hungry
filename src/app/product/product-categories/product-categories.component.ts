import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { productCategoriesSelector } from './store/get-product-categories.selectors';
import { Observable } from 'rxjs';
import { ProductCategoryInterface } from './types/product-category.interface';
import { getProductCategoriesAction } from './store/get-product-categories.action';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesComponent implements OnInit {
  productCategories$: Observable<ProductCategoryInterface[] | null | undefined> | undefined;
  selected$: Observable<string | null> | undefined;

  constructor(private store$: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store$.dispatch(getProductCategoriesAction());

    this.productCategories$ = this.store$.pipe(
      select(productCategoriesSelector)
    );

    this.selected$ = this.route.params.pipe(
      map((params: Params) => params.category || null)
    );
  }

}
