import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../card/card.module';
import { FlexModule, GridModule } from '@angular/flex-layout';
import { OrderModule } from '../order/order.module';
import { MatChipsModule } from '@angular/material/chips';
import { ProductCategoriesModule } from '../product/product-categories/product-categories.module';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MatButtonModule,
    MatIconModule,
    CardModule,
    FlexModule,
    GridModule,
    OrderModule,
    MatChipsModule,
    ProductCategoriesModule
  ]
})
export class BrowseModule { }
