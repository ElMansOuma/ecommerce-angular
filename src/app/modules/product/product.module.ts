import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './list/list.component';
import { ProductDetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule],
  exports: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule { }