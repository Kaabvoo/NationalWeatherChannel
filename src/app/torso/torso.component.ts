import { Component, OnInit, Input } from '@angular/core';

import { Observable } from "rxjs"
import { Store } from "@ngrx/store";
import { card } from "../modelo/objetos.model";
import { AppState } from "../rxjs/app.state";
import * as weatherActions from "../rxjs/actions/weather.actions";

@Component({
  selector: 'app-torso',
  templateUrl: './torso.component.html',
  styleUrls: ['./torso.component.css']
})
export class TorsoComponent implements OnInit {
  weather: Observable<card>
  constructor(private store: Store<AppState>) {
    this.weather = store.select("reducerWeather");
  }
  estadoT: Boolean = true;
  tempF:Number;

  ngOnInit() {
    this.store.dispatch(new weatherActions.RefreshPage)
  }

  testEliminate(i){
    this.store.dispatch(new weatherActions.EraseAction(i))
  }

}
