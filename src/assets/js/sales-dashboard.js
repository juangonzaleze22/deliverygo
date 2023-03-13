$(function () {
	"use strict";
	
	
	
	// chart 1
	var options = {
		series: [{
			name: 'Total Orders',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var options = {
		series: [{
			name: 'Total Income',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart2"), options);
	chart.render();
	// chart 3
	var options = {
		series: [{
			name: 'Total Users',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart3"), options);
	chart.render();
	// chart 4
	var options = {
		series: [{
			name: 'Comments',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
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
			width: 2.4,
			curve: 'smooth'
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: .5,
				gradientToColors: ["#fff"],
				inverseColors: !1,
				opacityFrom: 0.2,	
		     	opacityTo: 0.5,
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
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	
	
	
	// chart 5
	// look in shared/data folder
	
	
	// chart 6
	var options = {
		chart: {
			height: 300,
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
					background: 'rgba(255, 255, 255, 0.15)',
					//strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
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
		series: [68],
		stroke: {
			lineCap: 'round',
			//dashArray: 4
		},
		labels: ['Reached'],
	}
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	
	
	
	// chart 7
	// look in shared/data folder


	// chart 8

var options = {
    series: [{
        name: 'Online Sales',
        data: [33, 44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 68]
    }, {
        name: 'Offline Sales',
        data: [38, 35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 43]
    }],
    chart: {
        foreColor: 'rgba(255, 255, 255, 0.75)',
        type: 'bar',
        height:280,
        stacked: true,
        toolbar: {
            show: false
		},
		
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
	},
	grid: {
		borderColor: 'rgba(255, 255, 255, 0.12)',
		show: true,
	},
	legend: {
		show: true,
		position: 'top',
		horizontalAlign: 'right'
	  },
	  stroke: {
		show: !0,
		width: 2,
		colors: ["transparent"]
	},
	colors: ["#fff", "rgba(255, 255, 255, 0.25)"],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "" + val + " thousands"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();


// chart 9
var options = {
	series: [{
		name: 'Total Orders',
		data: [340, 160, 671, 414, 555,  414, 555, 257]
	}],
	chart: {
		type: 'area',
		height: 180,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		},
		dropShadow: {
			enabled: true,
			top: 3,
			left: 14,
			blur: 4,
			opacity: 0.12,
			color: '#16bf0b',
		},
		sparkline: {
			enabled: true
		}
	},
	markers: {
		size: 0,
		colors: ["#16bf0b"],
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
		width: 2.4,
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
		  opacityFrom: 0.5,	
		  opacityTo: 0.2,
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
var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();




   // world map
	
	jQuery('#geographic-map-3').vectorMap({
		map: 'world_mill_en',
		backgroundColor: 'transparent',
		borderColor: '#818181',
		borderOpacity: 0.25,
		borderWidth: 1,
		zoomOnScroll: false,
		color: '#009efb',
		regionStyle: {
			initial: {
				fill: '#fff'
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
		hoverColor: '#009efb',
		markers: [{
			latLng: [21.00, 78.00],
			name: 'I Love My India'
		}],
		series: {
			regions: [{
				values: {
					IN: 'rgba(255, 255, 255, 0.20)',
					US: 'rgba(255, 255, 255, 0.60)',
					RU: 'rgba(255, 255, 255, 0.80)',
					AU: 'rgba(255, 255, 255, 0.10)'
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