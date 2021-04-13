import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterControlModule } from './counter-control/counter-control.module';
import { FocusOutDirective } from './directives/focus-out.directive';
import { HideSkeletonDirective } from './directives/hide-skeleton.directive';
import { OrderDoneModalComponent } from './order-done-modal/order-done-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FocusOutDirective,
    HideSkeletonDirective,
    OrderDoneModalComponent
  ],
  exports: [
    CounterControlModule,
    FocusOutDirective,
    HideSkeletonDirective
  ],
  imports: [
    CommonModule,
    CounterControlModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule {
}
