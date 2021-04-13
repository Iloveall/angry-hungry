import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { ProductInterface } from '../product/types/product.intefrace';
import { select, Store } from '@ngrx/store';
import { getProductsAction } from '../product/store/get-products.actions';
import {
  getHasProductsSelector,
  getProductsLoadingSelector,
  getProductsPaginationSelector,
  getProductsSelector
} from '../product/store/get-products.selectors';
import { PageEvent } from '@angular/material/paginator';
import { PaginationInterface } from '../shared/types/pagination.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';
import { SkeletonService } from '../shared/services/skeleton.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseComponent implements OnInit, OnDestroy {
  products$: Observable<ProductInterface[] | null | undefined> | undefined;
  loading$: Observable<boolean> | undefined;
  loaded$: Observable<boolean> | undefined;
  hasProducts$: Observable<boolean> | undefined;
  pagination$: Observable<PaginationInterface | null | undefined> | undefined;
  private readonly unsubscribe$ = new Subject<void>();

  constructor(private store$: Store, private router: Router, private route: ActivatedRoute, private skeletonService: SkeletonService) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getProducts$(): Observable<ProductInterface[] | null | undefined> {
    return this.store$.pipe(select(getProductsSelector), tap(() => this.hideSkeleton()));
  }

  getProductsPagination$(): Observable<PaginationInterface | null | undefined> {
    return this.store$.pipe(select(getProductsPaginationSelector));
  }

  getProductsLoaded$(): Observable<boolean> {
    return this.store$.pipe(select(getProductsLoadingSelector));
  }

  getProductsLoading$(): Observable<boolean> {
    return this.store$.pipe(select(getProductsLoadingSelector));
  }

  getHasProducts$(): Observable<boolean> {
    return this.store$.pipe(select(getHasProductsSelector));
  }

  initializeValues(): void {
    this.products$ = this.getProducts$();
    this.pagination$ = this.getProductsPagination$();
    this.loading$ = this.getProductsLoading$();
    this.loaded$ = this.getProductsLoaded$();
    this.hasProducts$ = this.getHasProducts$();
  }

  fetchData(): void {
    combineLatest([
      this.route.params,
      this.route.queryParams
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([params, queryParams]) =>
        this.store$.dispatch(getProductsAction({queryParams: {...queryParams, ...params}}))
      );
  }

  onPaginatorPageChanged(event: PageEvent): void {
    const queryParams: Params = {page: event.pageIndex, size: event.pageSize};
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'});
  }

  trackByFn(index: number, product: ProductInterface): number {
    return product.id;
  }

  hideSkeleton(): void {
    this.skeletonService.hide();
  }
}
