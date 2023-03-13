import { Component, OnInit, ViewChild } from '@angular/core';
import * as chartsData from 'src/app/shared/data/default-dashboard';

import ApexCharts from 'apexcharts/dist/apexcharts.common.js';


import {
  ChartComponent,
  ApexChart,
  ApexAnnotations,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexStates,
  ApexTitleSubtitle,
  ApexTheme,
  ApexMarkers
} from "ng-apexcharts";


export type ChartOptions = {
    chart: ApexChart;
    annotations: ApexAnnotations;
    colors: string[];
    dataLabels: ApexDataLabels;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    stroke: ApexStroke;
    labels: string[];
    legend: ApexLegend;
    fill: ApexFill;
    tooltip: ApexTooltip;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    grid: ApexGrid;
    states: ApexStates;
    title: ApexTitleSubtitle;
    subtitle: ApexTitleSubtitle;
    theme: ApexTheme;
    markers: ApexMarkers
};






@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  

  @ViewChild("chart-1") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  
  
  // line -Chart 1
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;

  
  // Doughnut -Chart 2
  public doughnutChartLabels = chartsData.doughnutChartLabels;
  public doughnutChartData = chartsData.doughnutChartData;
  public doughnutChartType = chartsData.doughnutChartType;
  public doughnutChartColors = chartsData.doughnutChartColors;
  public doughnutChartOptions = chartsData.doughnutChartOptions;

  
  // line -Chart 3
  public lineChart3Data = chartsData.lineChart3Data;
  public lineChart3Labels = chartsData.lineChart3Labels;
  public lineChart3Options = chartsData.lineChart3Options;
  public lineChart3Colors = chartsData.lineChart3Colors;
  public lineChart3Legend = chartsData.lineChart3Legend;
  public lineChart3Type = chartsData.lineChart3Type;

  // bar -Chart 4
  public barChartOptions = chartsData.barChartOptions;
  public barChartLabels = chartsData.barChartLabels;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = chartsData.barChartData;
  public barChartColors = chartsData.barChartColors;

  // bar -Chart 6
  public barChart6Options = chartsData.barChart6Options;
  public barChart6Labels = chartsData.barChart6Labels;
  public barChart6Type = chartsData.barChart6Type;
  public barChart6Legend = chartsData.barChart6Legend;
  public barChart6Data = chartsData.barChart6Data;
  public barChart6Colors = chartsData.barChart6Colors;


  
  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }


  constructor() {
    // Chart 5 Options
    this.chartOptions = {

      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          //startAngle: -135,
          //endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: 'transparent',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: 'rgba(255, 255, 255, 0.12)',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
        color: 'rgba(254, 197, 7, 0.55)',
              opacity: 0.55
            }
          },
  
          dataLabels: { 
            name: {
              offsetY: -5,
              show: true,
              color: '#fff',
              fontSize: '14px'
            },
            value: {
              formatter: function (val) {
            return val + "%";
          },
              color: '#fff',
              fontSize: '20px',
              show: true,
        offsetY: 10,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#fff'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ["#fff"],
      series: [65],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total'],

   };

   }

  ngOnInit(): void {
    $.getScript("./assets/js/default-dashboard.js");

  }

}
