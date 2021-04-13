import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDetailsService } from '../../product/services/product-details.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  hasProductsSelector,
  orderProductsSelector,
  orderProductsTotalPriceSelector,
  totalPriceOfOrderProductOptionsSelector, totalPriceOfOrderProductSelector
} from '../store/order.selectors';
import { tap } from 'rxjs/operators';
import { OrderProductInterface } from '../types/product-order.interface';
import { removeProductFromOrderAction, updateProductOrderAction } from '../store/order.actions';
import { Update } from '@ngrx/entity';
import { getProductAction } from '../../product/product-details/store/get-product.actions';
import { MatDialog } from '@angular/material/dialog';
import { OrderDoneModalComponent } from '../../shared/order-done-modal/order-done-modal.component';
import { ProductInterface } from '../../product/types/product.intefrace';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  orderProducts$: Observable<OrderProductInterface[] | null> | undefined;
  totalPrice$: Observable<number> | undefined;
  hasProducts$: Observable<boolean> | undefined;

  constructor(private productDetailsService: ProductDetailsService, private store$: Store, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.orderProducts$ = this.store$.pipe(select(orderProductsSelector));
    this.totalPrice$ = this.store$.pipe(select(orderProductsTotalPriceSelector));
    this.hasProducts$ = this.store$.pipe(select(hasProductsSelector));
  }

  openProductDetails(event: Event, orderProduct: OrderProductInterface): void {
    this.closeMenu.emit();
    this.store$.dispatch(getProductAction({id: orderProduct.product.id}));
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

  totalPriceOfOrderProduct$(id: number): Observable<number> {
    return this.store$.pipe(select(totalPriceOfOrderProductSelector, {id}));
  }

  totalPriceOfOrderProductOptions$(id: number): Observable<number> {
    return this.store$.pipe(select(totalPriceOfOrderProductOptionsSelector, {id}));
  }

  onComplete(event: Event): void {
    this.closeMenu.emit();

    const dialogRef = this.dialog.open(OrderDoneModalComponent);

    dialogRef.afterClosed().subscribe(() => this.clearAppData());
  }

  clearAppData(): void {
    // Todo: clear all store data
  }

  trackByFn(index: number, orderProduct: OrderProductInterface): number {
    return orderProduct.product.id;
  }
}
