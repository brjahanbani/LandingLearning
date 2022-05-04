import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArticleResponse,
  NewsApiService,
} from 'src/app/_services/news-api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles!: Observable<ArticleResponse[]>;
  currentPage: number = 1;
  numberOfPages: number = 5;

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.setPages(1);
    this.articles = this.newsApiService.output;
    this.newsApiService.pagesInput.subscribe((page: number) => {
      this.currentPage = page;
    });
    this.newsApiService.totalPages.subscribe((pages: number) => {
      this.numberOfPages = pages;
    });
  }

  ngOnInit(): void {}

  changePage(page: number): void {
    this.newsApiService.setPages(page);
  }
}
