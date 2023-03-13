import { Component, OnInit } from '@angular/core';
import * as highchartsData from 'src/app/shared/data/analytics-dashboard';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  
   // Chart 6
   public Highcharts6 = highchartsData.Highcharts6;
   public chartOptions6 = highchartsData.chartOptions6;

  // Chart 7
  public Highcharts7 = highchartsData.Highcharts7;
  public chartOptions7 = highchartsData.chartOptions7;
  
  // Chart 8
  public Highcharts8 = highchartsData.Highcharts8;
  public chartOptions8 = highchartsData.chartOptions8;


  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/analytics-dashboard.js");
  }

}
