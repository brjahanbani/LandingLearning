import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorcComponent } from './paginatorc/paginatorc.component';

@NgModule({
  declarations: [PaginatorcComponent],
  imports: [CommonModule],
  exports: [PaginatorcComponent],
})
export class SharedModule {}
