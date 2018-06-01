import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})

export class GetWeatherService {

  constructor(private http: Http) { }

  weatherOf(lugar: string){
    console.log(lugar);
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + lugar + '&appid=fbcc70b37545ac5adb0b19bf9d030da7&units=metric')
  }
}
