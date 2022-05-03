import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  pluck,
  switchMap,
  toArray,
} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

interface responseWeather {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
  };
}
@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private url: string = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(private http: HttpClient) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords: any) => {
        return new HttpParams()
          .set('appid', '628bda8d865094c705e860e039fb69a6')
          .set('units', 'metric')
          .set('lon', coords.longitude.toString())
          .set('lat', coords.latitude.toString());
      }),
      switchMap((params) =>
        this.http.get<responseWeather[]>(this.url, { params })
      ),
      pluck('list'),
      mergeMap((value: any) => of(...value)),
      filter((value, index) => index % 8 === 0),
      map((value: any) => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp,
        };
      }),
      toArray()
    );
  }

  getCurrentLocation() {
    return new Observable((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    });

    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
