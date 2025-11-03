/**
 * Front-end JavaScript for Google Charts Block.
 *
 * This file is enqueued on the front-end and handles rendering
 * the Google Charts visualization.
 *
 * @package FlexPerception
 */

/**
 * Load and render Google Charts on the front-end.
 */
( function () {
	'use strict';

	/**
	 * Load Google Charts library.
	 */
	const loadGoogleCharts = () => {
		return new Promise( ( resolve, reject ) => {
			if ( window.google && window.google.charts ) {
				resolve();
				return;
			}

			const script = document.createElement( 'script' );
			script.src = 'https://www.gstatic.com/charts/loader.js';
			script.async = true;
			script.onload = () => {
				window.google.charts.load( 'current', {
					packages: [ 'corechart' ],
				} );
				window.google.charts.setOnLoadCallback( resolve );
			};
			script.onerror = reject;
			document.head.appendChild( script );
		} );
	};

	/**
	 * Draw a single chart.
	 *
	 * @param {HTMLElement} chartElement The chart container element.
	 */
	const drawChart = ( chartElement ) => {
		const configData = chartElement.getAttribute( 'data-chart-config' );
		if ( ! configData ) {
			return;
		}

		let config;
		try {
			config = JSON.parse( configData );
		} catch ( error ) {
			/* eslint-disable no-console */
			console.error( 'Error parsing chart config:', error );
			/* eslint-enable no-console */
			return;
		}

		// Create DataTable.
		const data = new window.google.visualization.DataTable();
		data.addColumn( 'string', 'Label' );
		data.addColumn( 'number', 'Value' );

		config.chartData.forEach( ( item ) => {
			data.addRow( [ item.label, item.value ] );
		} );

		// Chart options.
		const options = {
			title: config.chartTitle,
			width: config.width,
			height: config.height,
			colors: config.colors,
			pieSliceText: 'percentage',
			legend: { position: 'right' },
		};

		// Create and draw chart.
		const chart = new window.google.visualization.PieChart(
			chartElement
		);
		chart.draw( data, options );

		// Store chart reference for export functionality.
		chartElement.chartInstance = chart;
	};

	/**
	 * Initialize all charts on the page.
	 */
	const initCharts = () => {
		const chartElements = document.querySelectorAll(
			'.google-charts-block__chart[data-chart-config]'
		);

		if ( chartElements.length === 0 ) {
			return;
		}

		loadGoogleCharts()
			.then( () => {
				chartElements.forEach( ( chartElement ) => {
					drawChart( chartElement );
				} );
			} )
			.catch( ( error ) => {
				/* eslint-disable no-console */
				console.error( 'Error loading Google Charts:', error );
				/* eslint-enable no-console */
			} );
	};

	/**
	 * Handle chart export.
	 *
	 * @param {Event} event The click event.
	 */
	const handleExport = ( event ) => {
		const button = event.target;
		if (
			! button.classList.contains( 'google-charts-block__export-btn' )
		) {
			return;
		}

		const chartId = button.getAttribute( 'data-chart-id' );
		const chartElement = document.getElementById( chartId );

		if ( ! chartElement || ! chartElement.chartInstance ) {
			/* eslint-disable no-console */
			console.error( 'Chart instance not found' );
			/* eslint-enable no-console */
			return;
		}

		// Get the chart's SVG content.
		const svgElement = chartElement.querySelector( 'svg' );
		if ( ! svgElement ) {
			/* eslint-disable no-console */
			console.error( 'SVG element not found' );
			/* eslint-enable no-console */
			return;
		}

		// Convert SVG to data URL.
		const svgData = new XMLSerializer().serializeToString( svgElement );
		const svgBlob = new Blob( [ svgData ], {
			type: 'image/svg+xml;charset=utf-8',
		} );
		const svgUrl = URL.createObjectURL( svgBlob );

		// Create download link.
		const downloadLink = document.createElement( 'a' );
		downloadLink.href = svgUrl;
		downloadLink.download = 'google-chart.svg';
		document.body.appendChild( downloadLink );
		downloadLink.click();
		document.body.removeChild( downloadLink );
		URL.revokeObjectURL( svgUrl );
	};

	/**
	 * Initialize on DOM ready.
	 */
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', initCharts );
	} else {
		initCharts();
	}

	/**
	 * Set up export button handlers.
	 */
	document.addEventListener( 'click', handleExport );

	/**
	 * Re-initialize charts on window resize for responsiveness.
	 */
	let resizeTimeout;
	window.addEventListener( 'resize', () => {
		clearTimeout( resizeTimeout );
		resizeTimeout = setTimeout( () => {
			const chartElements = document.querySelectorAll(
				'.google-charts-block__chart[data-chart-config]'
			);
			chartElements.forEach( ( chartElement ) => {
				if ( chartElement.chartInstance ) {
					drawChart( chartElement );
				}
			} );
		}, 250 );
	} );
} )();
