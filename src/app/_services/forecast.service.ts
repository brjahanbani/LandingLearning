import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor() {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords: any) => {
        return new HttpParams()
          .set('appid', '628bda8d865094c705e860e039fb69a6')
          .set('units', 'metric')
          .set('lon', coords.longitude.toString())
          .set('lat', coords.latitude.toString());
      })
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
