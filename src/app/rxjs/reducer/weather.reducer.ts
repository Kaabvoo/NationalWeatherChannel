import { Action } from "@ngrx/store";
import { card } from "../../modelo/objetos.model";
import * as weatherActions from "../actions/weather.actions";

import { GetWeatherService } from "../../services/get-weather.service";
import { constructDependencies } from "@angular/core/src/di/reflective_provider";

const defaultState: card = {
    city: "Agregar Carta",
    ctry: "",
    temp: 0,
    tempF: 0,
    weat: ""
}

export function weatherReducer(state: card[] = [], action: weatherActions.Actions){
switch (action.type) {
    case weatherActions.GET_NOW:
        var a = [...state, action.payload];
        localStorage.setItem("WeatherApp", JSON.stringify(a))
        return a;

    case weatherActions.ERA_NUM:
        state.splice(action.id, 1);
        localStorage.setItem("WeatherApp", JSON.stringify(state))
        return state;

    case weatherActions.REF_PAG:
        if(JSON.parse(localStorage.getItem("WeatherApp")) !== null){
            let c = JSON.parse(localStorage.getItem("WeatherApp"))
            return c;
        }
        else { return state; }
    
    default:
        return state;
    }
}