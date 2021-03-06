import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { NotificationsModule } from './notifications/notifications.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    NotificationsModule,
    NewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
