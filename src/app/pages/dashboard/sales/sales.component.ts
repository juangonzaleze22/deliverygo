import { Component, OnInit } from '@angular/core';
import * as highchartsData from 'src/app/shared/data/sales';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  
  // Chart 5
  public Highcharts5 = highchartsData.Highcharts5;
  public chartOptions5 = highchartsData.chartOptions5;

  
  // Chart 7
  public Highcharts7 = highchartsData.Highcharts7;
  public chartOptions7 = highchartsData.chartOptions7;

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/sales-dashboard.js");
  }

}
