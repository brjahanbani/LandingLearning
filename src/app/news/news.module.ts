import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TrimOutletPipe } from '../_pipes/trim-outlet.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticleListComponent, TrimOutletPipe],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [ArticleListComponent],
})
export class NewsModule {}
