import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDetailsService } from '../../product/services/product-details.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hasProductsSelector, orderProductsSelector, orderProductsTotalPriceSelector } from '../store/order.selectors';
import { tap } from 'rxjs/operators';
import { OrderProductInterface } from '../types/product-order.interface';
import { removeProductFromOrderAction, updateProductOrderAction } from '../store/order.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  orderProducts$: Observable<OrderProductInterface[] | null> | undefined;
  totalPrice$: Observable<number> | undefined;
  hasProducts$: Observable<boolean> | undefined;

  constructor(private productDetailsService: ProductDetailsService, private store$: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.orderProducts$ = this.store$.pipe(select(orderProductsSelector), tap(console.log));
    this.totalPrice$ = this.store$.pipe(select(orderProductsTotalPriceSelector));
    this.hasProducts$ = this.store$.pipe(select(hasProductsSelector));
  }

  openProductDetails(): void {
    this.closeMenu.emit();
    this.productDetailsService.showDetails();
  }

  increaseProductAmount(event: Event, orderProduct: OrderProductInterface): void {
    const updateOrderProduct: Update<OrderProductInterface> = {
      id: orderProduct.product.id,
      changes: {
        ...orderProduct,
        amount: orderProduct.amount + 1
      }
    };

    this.store$.dispatch(updateProductOrderAction({updateOrderProduct}));
  }

  reduceProductAmount(event: Event, orderProduct: OrderProductInterface): void {
    if (orderProduct.amount === 1) {
      this.removeProduct(orderProduct);
      return;
    }

    const updateOrderProduct: Update<OrderProductInterface> = {
      id: orderProduct.product.id,
      changes: {
        ...orderProduct,
        amount: orderProduct.amount - 1
      }
    };

    this.store$.dispatch(updateProductOrderAction({updateOrderProduct}));
  }

  removeProduct(orderProduct: OrderProductInterface): void {
    this.store$.dispatch(removeProductFromOrderAction({id: orderProduct.product.id}));
  }
}
