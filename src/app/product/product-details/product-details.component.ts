import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
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

  constructor(private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isOpened = true;
    });
  }

  onSubmit(): void {
    this.close();
  }

  onClose(): void {
    this.close();
  }

  close(): void {
    this.productDetailsService.hideDetails();
  }
}
