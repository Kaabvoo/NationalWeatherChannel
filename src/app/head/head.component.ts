import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { Store } from "@ngrx/store";
import { card } from "../modelo/objetos.model";
import { AppState } from "../rxjs/app.state";
import * as weatherActions from "../rxjs/actions/weather.actions";

import { GetWeatherService } from "../services/get-weather.service";
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {
  wea: Observable<card>

  constructor(
    private getwe: GetWeatherService,
    private store: Store<AppState>,
  ) {
    this.wea = store.select("reducerWeather");
   }

  ngOnInit() {
  }

  subText(i){
    this.getwe.weatherOf( i.target.inputContry.value )
    .subscribe(repo => {
      var r = repo.json();
      this.store.dispatch(new weatherActions.WeatherActions({city:r.name, ctry: r.sys.country, temp: Math.round(r.main.temp), tempF: Math.round(((r.main.temp)*1.8)+32), weat: r.weather[0].main}))
    })
    i.target.inputContry.value = "";
    return false;
  }
}
