import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/_services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecastData$ = new Observable<{ dateString: string; temp: number }[]>();
  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {
    this.forecastData$ = this.forecastService.getForecast();

    // this.forecastService.getForecast().subscribe((data) => {
    //   this.forecastData = data;
    // });
  }
}
