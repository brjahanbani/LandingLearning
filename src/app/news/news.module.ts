import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TrimOutletPipe } from '../_pipes/trim-outlet.pipe';

@NgModule({
  declarations: [ArticleListComponent, TrimOutletPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ArticleListComponent],
})
export class NewsModule {}
