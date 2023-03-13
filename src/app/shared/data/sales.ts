import * as Highcharts from 'highcharts';



// Chart 5
export var Highcharts5: typeof Highcharts = Highcharts;
export var chartOptions5: Highcharts.Options = {
    chart: {
        type: 'area',
        height: 420,
        styledMode: true
    },
    credits: {
        enabled: false
    },
    accessibility: {
        //description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSRâ€™s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSRâ€™s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russiaâ€™s 4,500.'
    },
    title: {
        text: 'Sales and Traffic Annual Report'
    },
    
    xAxis: {
        allowDecimals: false,
        type: 'datetime',
        labels: {
            // formatter: function () {
            //     return this.value; // clean, unformatted number for year
            // }
        },
        accessibility: {
            //rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            // formatter: function () {
            //     return this.value / 1000 + 'k';
            // }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        type: 'area',
        name: 'Sales',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        type: 'area',
        name: 'Traffic',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
        ]
    }]
};



	// chart 7

    export var Highcharts7: typeof Highcharts = Highcharts;
export var chartOptions7: Highcharts.Options = {

		chart: {
            type: 'pie',
			height: 330,
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Total Traffic by Source'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
            type: 'pie',
			// minPointSize: 10,
			innerSize: '65%',
			// zMin: 0,
			name: 'Traffic',
			data: [{
				name: 'Organic',
				y: 505370,
				z: 92.9
			}, {
				name: 'Paid',
				y: 551500,
				z: 118.7
			}, {
				name: 'Email',
				y: 312685,
				z: 124.6
			}, {
				name: 'Google',
				y: 78867,
				z: 137.5
			}, {
				name: 'Direct',
				y: 301340,
				z: 201.8
			}, {
				name: 'Bing',
				y: 357022,
				z: 235.6
			}]
		}]
    
	}
