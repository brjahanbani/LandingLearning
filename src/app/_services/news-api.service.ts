import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, switchMap, tap } from 'rxjs';

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
  private pageSize = 10;
  private apiKey = '1367351cab1346e1aa8063cd360fdfac';
  private country = 'no';

  pagesInput!: Subject<number>;
  output!: Observable<ArticleResponse[]>;
  totalPages!: Subject<number>;

  constructor(private http: HttpClient) {
    this.pagesInput = new Subject(); //next page
    // subscribe to the subject
    this.output = this.pagesInput.asObservable().pipe(
      //create http params
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', this.pageSize.toString())
          .set('page', page.toString());
      }),
      //request
      switchMap((params) => {
        return this.http.get(this.url, { params });
      }),
      //response
      tap((response: any) => {
        const totalPages = Math.ceil(response?.totalResults / this.pageSize);
        this.totalPages.next(totalPages);
      }),
      pluck('articles')
    );
  }
}
