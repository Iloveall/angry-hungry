import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterControlComponent } from './counter-control.component';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CounterControlComponent],
  exports: [CounterControlComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CounterControlModule { }
