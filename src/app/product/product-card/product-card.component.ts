import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { ProductInterface } from '../types/product.intefrace';
import { select, Store } from '@ngrx/store';
import { getProductAction } from '../product-details/store/get-product.actions';
import { Observable } from 'rxjs';
import { hasOrderProductForIdSelector } from '../../order/store/order.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductInterface;

  ordered$: Observable<boolean> | undefined;

  constructor(private productDetailsService: ProductDetailsService, private store$: Store) { }

  ngOnInit(): void {
    this.ordered$ = this.store$.pipe(select(hasOrderProductForIdSelector, {id: this.product.id}));
  }

  @HostListener('click')
  onClick(event: Event): void {
    this.store$.dispatch(getProductAction({id: this.product.id}));
    this.productDetailsService.showDetails();
  }
}
