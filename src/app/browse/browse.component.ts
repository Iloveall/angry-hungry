import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductInterface } from '../product/types/product.intefrace';
import { ProductCategoryInterface } from '../product/types/product-category.interface';

const PRODUCTS: ProductInterface[] = [
  {
    name: 'Product #1',
    description: 'Lorem ipsum',
    image: 'f2nbwpbglrzhjfj1oc9j.webp',
    price: 1.2,
    options: [
      {
        name: 'Option 1',
        price: 0.22
      },
      {
        name: 'Option 2',
        price: 0.21
      },
      {
        name: 'Option 3',
        price: 0.12
      },
      {
        name: 'Option 4',
        price: 0.45
      }
    ]
  },
  {
    name: 'Product #2',
    description: 'Lorem ipsum',
    image: 'aavpv4bx85nobnlud892.webp',
    price: 2.2,
    options: [
      {
        name: 'Option 1',
        price: 0.43
      },
      {
        name: 'Option 2',
        price: 0.65
      },
      {
        name: 'Option 3',
        price: 0.14
      },
      {
        name: 'Option 4',
        price: 0.47
      }
    ]
  }
];

const PRODUCT_CATEGORIES: ProductCategoryInterface[] = [
  {
    name: 'Japan',
    url: '/japan'
  },
  {
    name: 'Chinese',
    url: '/chinese'
  },
  {
    name: 'Burgers',
    url: '/burgers'
  },
  {
    name: 'Ukraine',
    url: '/ukraine'
  },
  {
    name: 'Russia',
    url: '/russia'
  }
];

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  categories$: Observable<ProductCategoryInterface[]> | undefined;
  products$: Observable<ProductInterface[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.categories$ = this.getCategories$();
    this.products$ = this.getProducts$();
  }

  getCategories$(): Observable<ProductCategoryInterface[]> {
    return of(PRODUCT_CATEGORIES);
  }

  getProducts$(): Observable<ProductInterface[]> {
    return of(PRODUCTS);
  }

}
