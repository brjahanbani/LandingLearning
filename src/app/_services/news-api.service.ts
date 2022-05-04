import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  pluck,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

export interface NewsApiResponse {
  totalResults: number;
  articles: ArticleResponse[];
}
export interface ArticleResponse {
  source: {
    name: string;
  };
  title: string;
  url: string;
}
@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 5;
  private apiKey = '1367351cab1346e1aa8063cd360fdfac';
  private country = 'us';

  pagesInput = new BehaviorSubject<number>(1);
  totalPages = new Subject<number>();
  output = new Observable<ArticleResponse[]>();

  constructor(private http: HttpClient) {
    this.output = this.pagesInput.pipe(
      //create http params
      map((page) => {
        return new HttpParams()
          .set('pageSize', this.pageSize.toString())
          .set('country', this.country)
          .set('apiKey', this.apiKey)
          .set('page', page?.toString());
      }),
      //request
      switchMap((params) => {
        console.log(params);
        return this.http.get<NewsApiService>(this.url, { params });
      }),
      //response
      tap((response: any) => {
        console.log(response.totalResults);
        const totalPages = Math.ceil(response?.totalResults / this.pageSize);
        console.log(totalPages);
        this.totalPages.next(totalPages);
      }),
      pluck('articles')
    );
  }

  setPages(page: number) {
    this.pagesInput.next(page);
  }
}
