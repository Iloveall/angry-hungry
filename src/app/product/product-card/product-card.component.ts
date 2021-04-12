import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';
import { ProductInterface } from '../types/product.intefrace';
import { Store } from '@ngrx/store';
import { getProductAction } from '../product-details/store/get-product.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductInterface;

  constructor(private productDetailsService: ProductDetailsService, private store: Store) { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick(event: Event): void {
    this.store.dispatch(getProductAction({id: this.product.id}));
    this.productDetailsService.showDetails();
  }
}
