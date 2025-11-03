<?php
// This file is generated. Do not modify it manually.
return array(
	'google-charts-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'flex-perception/google-charts-block',
		'version' => '0.1.0',
		'title' => 'Google Charts Block',
		'category' => 'widgets',
		'icon' => 'chart-pie',
		'description' => 'Display customizable Google Charts pie charts with your data.',
		'keywords' => array(
			'chart',
			'google charts',
			'pie chart',
			'data visualization'
		),
		'example' => array(
			
		),
		'attributes' => array(
			'chartTitle' => array(
				'type' => 'string',
				'default' => 'Sample Pie Chart'
			),
			'chartData' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Product A',
						'value' => 35
					),
					array(
						'label' => 'Product B',
						'value' => 25
					),
					array(
						'label' => 'Product C',
						'value' => 20
					),
					array(
						'label' => 'Product D',
						'value' => 20
					)
				)
			),
			'colorScheme' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'chartWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'chartHeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'enableExport' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'google-charts-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	)
);
