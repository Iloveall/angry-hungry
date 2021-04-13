import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { select, Store } from '@ngrx/store';
import { ProductInterface } from '../types/product.intefrace';
import { Observable } from 'rxjs';
import { getProductLoadingSelector, getProductSelector } from './store/get-product.selectors';
import { addProductToOrderAction } from '../../order/store/order.actions';
import { OrderProductInterface  } from '../../order/types/product-order.interface';
import { filter, map, switchMap } from 'rxjs/operators';
import { getOrderProductSelector } from '../../order/store/order.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductInterface | null | undefined> | undefined;
  loading$: Observable<boolean> | undefined;
  orderProduct$: Observable<any> | undefined;

  constructor(private store$: Store,
              private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.product$ = this.store$.pipe(select(getProductSelector));
    this.orderProduct$ = this.product$.pipe(
      filter((product: any) => !!product),
      switchMap((product: any) =>
        this.store$.pipe(select(getOrderProductSelector, {id: product.id})).pipe(
          map(orderProduct => ({
            values: orderProduct?.options || []
          }))
        )
      )
    );
    this.loading$ = this.store$.pipe(select(getProductLoadingSelector));
  }

  onSubmit(event: any, product: ProductInterface): void {
    const orderProduct: OrderProductInterface = {
      product,
      amount: 1,
      options: (event.values || []).filter((value: any) => !!value.option)
    };

    this.store$.dispatch(addProductToOrderAction({orderProduct}));
    this.close();
  }

  onClose(): void {
    this.close();
  }

  close(): void {
    this.productDetailsService.hideDetails();
  }
}
