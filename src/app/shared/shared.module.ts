import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterControlModule } from './counter-control/counter-control.module';

@NgModule({
  declarations: [
  ],
  exports: [
    CounterControlModule
  ],
  imports: [
    CommonModule,
    CounterControlModule
  ]
})
export class SharedModule { }
