import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GetProductEffects } from './store/get-product.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/get-product.reducer';
import { ProductDetailsComponent } from './product-details.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailsFormComponent } from './product-details-form/product-details-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetProductEffects]),
    StoreModule.forFeature('product', reducer),
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [ProductDetailsComponent, ProductDetailsFormComponent],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsModule {}
