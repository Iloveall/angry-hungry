import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/get-product-categories.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetProductCategoriesEffects } from './store/get-product-categories.effects';
import { ProductCategoriesComponent } from './product-categories.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetProductCategoriesEffects]),
    StoreModule.forFeature('productCategories', reducer),
    MatChipsModule,
    RouterModule
  ],
  exports: [
    ProductCategoriesComponent
  ]
})
export class ProductCategoriesModule {
}
