import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ArticleListComponent],
})
export class NewsModule {}
