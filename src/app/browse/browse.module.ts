import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule, GridModule } from '@angular/flex-layout';
import { OrderModule } from '../order/order.module';
import { MatChipsModule } from '@angular/material/chips';
import { ProductCategoriesModule } from '../product/product-categories/product-categories.module';
import { ProductCardModule } from '../product/product-card/product-card.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    GridModule,
    OrderModule,
    MatChipsModule,
    ProductCategoriesModule,
    ProductCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ]
})
export class BrowseModule { }
