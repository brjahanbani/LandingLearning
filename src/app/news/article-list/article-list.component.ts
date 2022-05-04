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

  constructor(private newsApiService: NewsApiService) {
    this.articles = this.newsApiService.output;
  }

  ngOnInit(): void {}
}
