import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from "../services/get-weather.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {

  constructor(private getwe: GetWeatherService) { }

  ngOnInit() {
  }

  subText(i){
    this.getwe.weatherOf( i.target.inputContry.value )
    .subscribe(repo => {console.log(repo.json())})
    i.target.inputContry.value = "";
    return false;
  }
}
