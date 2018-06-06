import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TorsoComponent } from './torso/torso.component';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './rxjs/reducer/weather.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TorsoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({
      reducerWeather: weatherReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
