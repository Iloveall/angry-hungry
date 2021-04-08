import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../product/types/product.intefrace';
import { select, Store } from '@ngrx/store';
import { getProductsAction } from '../product/store/get-products.actions';
import { getProductsSelector } from '../product/store/get-products.selectors';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  products$: Observable<ProductInterface[] | null | undefined> | undefined;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  getProducts$(): Observable<ProductInterface[] | null | undefined> {
    return this.store$.pipe(select(getProductsSelector));
  }

  initializeValues(): void {
    this.products$ = this.getProducts$();
  }

  fetchData(): void {
    this.store$.dispatch(getProductsAction({}));
  }

}
