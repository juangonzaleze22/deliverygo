$(function () {
	"use strict";
	// easy pie chart 
	$('.easy-dash-chart').easyPieChart({
		easing: 'easeOutBounce',
		barColor: '#ffffff',
		lineWidth: 10,
		trackColor: 'rgba(255, 255, 255, 0.12)',
		scaleColor: false,
		onStep: function (from, to, percent) {
			$(this.el).find('.w_percent').text(Math.round(percent));
		}
	});
	// world map
	jQuery('#dashboard-map').vectorMap({
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
			name: 'Lorem Ipsum Dollar'
		}],
		hoverOpacity: null,
		normalizeFunction: 'linear',
		scaleColors: ['#b6d6ff', '#005ace'],
		selectedColor: '#c9dfaf',
		selectedRegions: [],
		showTooltip: true,
	});
	$("#trendchart1").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 9, 10, 8], {
		type: 'bar',
		height: '20',
		barWidth: '2',
		resize: true,
		barSpacing: '3',
		barColor: '#fff'
	});
	$("#trendchart2").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 9, 10, 8], {
		type: 'bar',
		height: '20',
		barWidth: '2',
		resize: true,
		barSpacing: '3',
		barColor: '#fff'
	});
	$("#trendchart3").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 9, 10, 8], {
		type: 'bar',
		height: '20',
		barWidth: '2',
		resize: true,
		barSpacing: '3',
		barColor: '#fff'
	});
	$("#trendchart4").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 9, 10, 8], {
		type: 'bar',
		height: '20',
		barWidth: '2',
		resize: true,
		barSpacing: '3',
		barColor: '#fff'
	});
	$("#trendchart5").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 9, 10, 8], {
		type: 'bar',
		height: '20',
		barWidth: '2',
		resize: true,
		barSpacing: '3',
		barColor: '#fff'
	});
});