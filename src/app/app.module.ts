import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TorsoComponent } from './torso/torso.component';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './rxjs/reducer/weather.reducer';
import { ShowDataComponent } from './show-data/show-data.component';
import { RouterModule } from "@angular/router";
import { FrontCompComponent } from './front-comp/front-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TorsoComponent,
    ShowDataComponent,
    FrontCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({
      reducerWeather: weatherReducer,
    }),
    RouterModule.forRoot([
      {
        path: "data",
        component: ShowDataComponent
      },
      {
        path: "",
        component: FrontCompComponent,
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
