import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailsService } from '../product/services/product-details.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  showProductDetails$: Observable<boolean> | undefined;

  constructor(private productDetails: ProductDetailsService) { }

  ngOnInit(): void {
    this.showProductDetails$ = this.productDetails.showDetails$;
  }

  onBlurProductDetails(e: any): void {
    this.productDetails.hideDetails();
  }

}
