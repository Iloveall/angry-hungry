import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductDetailsService } from '../../product/services/product-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();

  constructor(private productDetails: ProductDetailsService) { }

  ngOnInit(): void {
  }

  openProductDetails(): void {
    this.closeMenu.emit();
    this.productDetails.showDetails();
  }

}
