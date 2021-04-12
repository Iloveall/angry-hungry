import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { GetProductsEffects } from './store/get-products.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/get-products.reducer';
import { ProductDetailsModule } from './product-details/product-details.module';

@NgModule({
  declarations: [
  ],
  exports: [
    ProductDetailsModule
  ],
  imports: [
    CommonModule,
    FlexModule,
    EffectsModule.forFeature([GetProductsEffects]),
    StoreModule.forFeature('products', reducer),
    ProductDetailsModule
  ]
})
export class ProductModule { }
