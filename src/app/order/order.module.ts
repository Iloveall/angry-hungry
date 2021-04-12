import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule, GridModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/order.reducer';


@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailsComponent
  ],
  exports: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    GridModule,
    MatDividerModule,
    EffectsModule.forFeature([]),
    StoreModule.forFeature('order', reducer),
  ]
})
export class OrderModule { }
