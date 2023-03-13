import { ChartType } from 'chart.js';

  //line -chart 1

  export var lineChartData: Array<any> = [

    { data: [3, 3, 8,  5,  7, 4,  6, 4,  6, 3], label: 'New Visitor' },
    { data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5], label: 'Old Visitor' },
  
  ];
  export var lineChartLabels: Array<any> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  export var lineChartOptions: any = {
    animation: {
      duration: 1000, // general animation time
      easing: 'easeOutBack'
    },
    hover: {
      animationDuration: 1000, // duration of animations when hovering an item
      mode: 'label'
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
      fontColor: '#ddd',  
      boxWidth:40
      }
    },
    tooltips: {
      displayColors:false
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero:true,
          fontColor: '#ddd'
        },
        gridLines: {
          display: true ,
          color: "rgba(221, 221, 221, 0.08)"
        },
        }],
      yAxes: [{
        ticks: {
          beginAtZero:true,
          fontColor: '#ddd'
        },
        gridLines: {
          display: true ,
          color: "rgba(221, 221, 221, 0.08)"
        },
        }]
    },
  };
  export var lineChartColors: Array<any> = [
  
    {
  
      fill: true,
      backgroundColor: '#fff',
      borderColor: "transparent",
      pointRadius :"0",
      borderWidth: 3
    },
    {
  
      fill: true,
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      borderColor: "transparent",
      pointRadius :"0",
      borderWidth: 1
    },
  
  ];
  export var lineChartLegend = false;
  export var lineChartType : ChartType = 'line';
  


// Doughnut -chart 2
export var doughnutChartLabels: string[] = ["Direct", "Affiliate", "E-mail", "Other"];
export var doughnutChartData: number[] = [5856, 2602, 1802, 1105];
export var doughnutChartColors: any[] = [{ backgroundColor: [ "#ffffff", "rgba(255, 255, 255, 0.70)", "rgba(255, 255, 255, 0.50)", "rgba(255, 255, 255, 0.20)" ]
,borderWidth: [0, 0, 0, 0]}];
export var doughnutChartType  : ChartType = 'doughnut';
export var doughnutChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  //cutoutPercentage: 80,
  legend: {
    position: 'bottom',
          display: false,
    labels: {
            boxWidth:8
          }
  },
  tooltips: {
    displayColors:false
  }
   
};

  


  //line -chart 3

  export var lineChart3Data: Array<any> = [

    { data: [0, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10, 30], label: 'Page Views' }
  
  ];
  export var lineChart3Labels: Array<any> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  export var lineChart3Options: any = {
    animation: {
      duration: 1000, // general animation time
      easing: 'easeOutBack'
    },
    hover: {
      animationDuration: 1000, // duration of animations when hovering an item
      mode: 'label'
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    legend: {
                position: false,
                display: true,
            },
        tooltips: {
           enabled: false
      },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false
      }],
      yAxes: [{
        display: false,
        gridLines: false
      }]
    },
  };
  export var lineChart3Colors: Array<any> = [
  
    {
  
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderColor: '#fff',
      pointBackgroundColor:'#fff',
      pointHoverBackgroundColor:'#fff',
      pointBorderColor :'#fff',
      pointHoverBorderColor :'#fff',
      pointBorderWidth :1,
      pointRadius :0,
      pointHoverRadius :4,
      borderWidth: 3
    }
  
  ];
  export var lineChart3Legend = false;
  export var lineChart3Type  : ChartType = 'line';
  


// bar -Chart 4
export var barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
    labels: {
    fontColor: '#ddd',  
    boxWidth:40
    }
  },
  tooltips: {
    enabled:false
  },
  scales: {
    xAxes: [{
      
      display: false,
      gridLines: false
    }],
    yAxes: [{
      display: false,
      gridLines: false
      }]
  }

};
export var barChartLabels: string[] =  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export var barChartType  : ChartType = 'bar';
export var barChartLegend = false;

export var barChartData: any[] = [
  { barPercentage: .3, data: [0, 10, 14, 18, 12, 8, 16, 25, 15, 10, 20, 10, 30], label: 'Total Clicks' },
];

export var barChartColors: Array<any> = [


  {
    backgroundColor: "#fff"
  },

];


// bar -Chart 6
export var barChart6Options: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'bottom',
    labels: {
    fontColor: '#ddd',  
    boxWidth:13
    }
  },
  tooltips: {
    enabled:true,
    displayColors:false,
  },	
  
  scales: {
    xAxes: [{
      stacked: true,
     
   display: false,
   gridLines: false
   }],
    yAxes: [{
      stacked: true,
    display: false,
    gridLines: false
    }]
  }

};
export var barChart6Labels: string[] =  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export var barChart6Type : ChartType = 'bar';
export var barChart6Legend = false;

export var barChart6Data: any[] = [
  { barPercentage: .4, data: [39, 19, 25, 16, 31, 39, 23, 20, 23, 18, 15, 20], label: 'Total Earning' },
  { barPercentage: .4, data: [27, 12, 26, 15, 21, 27, 13, 19, 32, 22, 18, 30], label: 'Total Sales' }
];

export var barChart6Colors: Array<any> = [


  {
    backgroundColor: "#fff"
  },
  {
    backgroundColor: "rgba(255, 255, 255, 0.12)"
  },
  
];