import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { GetWeatherService } from "../services/get-weather.service";
import { weatherReducer } from '../rxjs/reducer/weather.reducer';
import { Chart } from 'chart.js';

interface wea{
  name: string;
  temp: number,
  max: number,
  min: number,
  hum: number,
  pres: number,
  ws: number,
  wd: number,
  srise: number,
  sset: number,
  weath: number,
}

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  constructor(public getCity: GetWeatherService) {
  }

  data: any;
  now: wea;
  chart: any;

  ngOnInit() {
    var lab = [];
    var dat = [1];
    //-----------------------------------------------------------
    this.data = this.getCity.vari;
    if(!this.data){this.data="No city selected!";}
    else{
      this.getCity.weatherOf(this.data)
      .subscribe((res)=>{
        var r = res.json();
        this.now = {
        name: r.name + "," + r.sys.country,
        temp:  r.main.temp,
        max: r.main.temp_max,
        min: r.main.temp_min,
        hum: r.main.humidity,
        pres: r.main.pressure,
        ws: r.wind.speed,
        wd: r.wind.deg,
        srise: r.sys.sunrise,
        sset: r.sys.sunset,
        weath: r.weather,
        }
      })
      this.getCity.forecastOf(this.data)
      .subscribe((res)=>{
        let a = res.json().list.map(rea => rea.main.temp)
        let b = res.json().list.map(rea => rea.main.temp)
        //
        let alldates = res.json().list.map(rea => rea.main.temp)
        let weatherDates = []
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        //
        this.chart = new Chart("myChart" , {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [{
                label: 'Temperature of',
                data: a,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 5,
                fill: false,
                pointRadius: 5,
                pointBorderWidth: 10,
            }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
      })
    }
    this.chart.update();
  }
}