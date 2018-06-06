import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { card } from "../../modelo/objetos.model"

export const GET_NOW = "GET_NOW";
export const ERA_NUM = "ERA_NUM";
export const REF_PAG = "REF_PAG";

export class WeatherActions implements Action{
    readonly type = GET_NOW;
    constructor(public payload: card) {}
}

export class EraseAction implements Action{
    readonly type = ERA_NUM;
    constructor(public id: number) {}
}

export class RefreshPage implements Action{
    readonly type = REF_PAG;
    constructor() {}
}

export type Actions = WeatherActions | EraseAction | RefreshPage;