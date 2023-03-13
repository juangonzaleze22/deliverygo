import { Component, OnInit } from '@angular/core';
import * as highchartsData from 'src/app/shared/data/alternate-dashboard';


@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.scss']
})
export class AlternateComponent implements OnInit {

  
   // Chart 12
   public Highcharts12 = highchartsData.Highcharts12;
   public chartOptions12 = highchartsData.chartOptions12;

  // Chart 13
  public Highcharts13 = highchartsData.Highcharts13;
  public chartOptions13 = highchartsData.chartOptions13;
  
  // Chart 14
  public Highcharts14 = highchartsData.Highcharts14;
  public chartOptions14 = highchartsData.chartOptions14;


  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/alternate-dashboard.js");
  }


}
