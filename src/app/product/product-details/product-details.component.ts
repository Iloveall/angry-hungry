import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { select, Store } from '@ngrx/store';
import { ProductInterface } from '../types/product.intefrace';
import { Observable } from 'rxjs';
import { getProductSelector } from './store/get-product.selectors';
import { addProductToOrderAction } from '../../order/store/order.actions';
import { OrderProductInterface  } from '../../order/types/product-order.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { getOrderProductSelector } from '../../order/store/order.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  product$: Observable<ProductInterface | null | undefined> | undefined;
  orderProduct$: Observable<any> | undefined;

  isOpened = false;

  @HostListener('window:click', ['$event'])
  onWindowClick(e: any): void {
    if (!this.isOpened) {
      return;
    }

    // Todo: Move to directive
    let elem = e.target;
    let allowToClose = true;

    while (elem.parentElement) {
      elem = elem.parentElement;

      if (elem.tagName === 'APP-PRODUCT-DETAILS') {
        allowToClose = false;
        break;
      }
    }

    if (allowToClose) {
      this.close();
    }
  }

  constructor(private store$: Store,
              private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
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
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isOpened = true;
    });
  }

  onSubmit(event: any, product: ProductInterface): void {
    console.log('event', event);

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
