$(function () {
	"use strict";

// chart 1
var options = {
    series: [{
        name: 'Sessions',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'line',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();



// chart 2
var options = {
    series: [{
        name: 'Total Users',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


// chart 3
var options = {
    series: [{
        name: 'Page Views',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#fff"],
          inverseColors: true,
          opacityFrom: 0.2,	
          opacityTo: 0.5,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();



// chart 4
var options = {
    series: [{
        name: 'Bounce Rate',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();




// chart 5
var options = {
    series: [{
        name: 'Avg. Session Duration',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'line',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2.5,
        curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();




// chart 6
var options = {
    series: [{
        name: 'Sales',
        data: [4, 8, 6, 9, 6, 7, 4, 5, 2.5, 3]
    }],
    chart: {
        type: 'area',
        foreColor: "rgba(255, 255, 255, 0.65)",
        height: 250,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#0d6efd',
        },
        sparkline: {
            enabled: false
        }
    },
    markers: {
        size: 0,
        colors: ["#0d6efd"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#fff'],
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0.5,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    grid: {
        borderColor: 'rgba(255, 255, 255, 0.12)',
        show: true,
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "K";
            }
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "" + val + "K"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();



// chart 7
var options = {
    series: [{
        name: 'New Visitors',
        data: [66, 76, 85, 101, 65, 87, 105, 91, 86]

    }, {
        name: 'Old Visitors',
        data: [55, 44, 55, 57, 56, 61, 58, 63, 60]
    }],
    chart: {
        foreColor: "rgba(255, 255, 255, 0.65)",
        type: 'bar',
        height: 260,
        stacked: false,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -20
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff", "rgba(255, 255, 255, 0.50)"],
            inverseColors: !1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    colors: ["#fff", "rgba(255, 255, 255, 0.50)"],
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "K";
            }
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    grid: {
        borderColor: 'rgba(255, 255, 255, 0.12)',
        show: true,
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "" + val + "K"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();



// chart 8
var options = {
    series: [{
        name: 'Sessions',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'bar',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#0d6efd',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#0d6efd"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();



// chart 9
var options = {
    series: [{
        name: 'Sessions',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff"],
            inverseColors: !1,
            opacityFrom:0.5,
            opacityTo: 0.2,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();


// chart 10
var options = {
    series: [{
        name: 'Sessions',
        data: [414, 555, 257, 901, 613, 727, 414, 555, 257]
    }],
    chart: {
        type: 'area',
        height: 60,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: 0.12,
            color: '#fff',
        },
        sparkline: {
            enabled: true
        }
    },
    markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
       // curve: 'smooth'
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#fff"],
            inverseColors: !1,
            opacityFrom:0.5,
            opacityTo: 0.2,
            stops: [0, 100]
        }
    },
    colors: ["#fff"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart10"), options);
chart.render();



// chart 11
var options = {
    chart: {
        height: 330,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -130,
            endAngle: 130,
            hollow: {
                margin: 0,
                size: '78%',
                //background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: false,
                    top: 3,
                    left: 0,
                    blur: 4,
                    color: 'rgba(0, 169, 255, 0.25)',
                    opacity: 0.65
                }
            },
            track: {
                background: 'rgba(255, 255, 255, 0.12)',
                //strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: false,
                    top: -3,
                    left: 0,
                    blur: 4,
                    color: 'rgba(0, 169, 255, 0.12)',
                    opacity: 0.65
                }
            },
            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -25,
                    show: true,
                    color: '#fff',
                    fontSize: '16px'
                },
                value: {
                    formatter: function (val) {
                        return val + "%";
                    },
                    color: '#fff',
                    fontSize: '45px',
                    show: true,
                    offsetY: 10,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
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
    series: [84],
    stroke: {
        lineCap: 'round',
        //dashArray: 4
    },
    labels: ['Dynamics Today'],
}
var chart = new ApexCharts(document.querySelector("#chart11"), options);
chart.render();





 // world map
	
 jQuery('#geographic-map-2').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: '#009efb',
    regionStyle: {
        initial: {
            fill: 'rgba(255, 255, 255, 1)'
        }
    },
    markerStyle: {
        initial: {
            r: 9,
            'fill': '#fff',
            'fill-opacity': 1,
            'stroke': '#000',
            'stroke-width': 5,
            'stroke-opacity': 0.4
        },
    },
    enableZoom: true,
    hoverColor: '#fff',
    markers: [{
        latLng: [21.00, 78.00],
        name: 'I Love My India'
    }],
    series: {
        regions: [{
            values: {
                IN: 'rgba(255, 255, 255, 0.50)',
                US: 'rgba(255, 255, 255, 0.50)',
                CN: 'rgba(255, 255, 255, 0.50)',
                CA: 'rgba(255, 255, 255, 0.50)',
                AU: 'rgba(255, 255, 255, 0.50)'
            }
        }]
    },
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
        var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
        alert(message);
    }
});





});