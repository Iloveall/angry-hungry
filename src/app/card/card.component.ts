import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product/services/product-details.service';
import { ProductInterface } from '../product/types/product.intefrace';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: ProductInterface;

  constructor(private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick(event: Event): void {
    this.productDetailsService.showDetails();
  }
}
