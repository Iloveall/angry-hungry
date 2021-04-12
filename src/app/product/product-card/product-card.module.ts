import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule
  ]
})
export class ProductCardModule { }
