import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { select, Store } from '@ngrx/store';
import { getProductForIdSelector } from '../store/get-products.selectors';
import { ProductInterface } from '../types/product.intefrace';
import { Observable } from 'rxjs';
import { getProductSelector } from './store/get-product.selectors';
import { addProductToOrderAction } from '../../order/store/order.actions';
import { OrderProductInterface  } from '../../order/types/product-order.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  product$: Observable<ProductInterface | null | undefined> | undefined;

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

  constructor(private store$: Store, private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this.product$ = this.store$.pipe(select(getProductSelector));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isOpened = true;
    });
  }

  onSubmit(event: Event, product: ProductInterface): void {
    const orderProduct: OrderProductInterface = {
      product,
      amount: 1
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
