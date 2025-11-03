<?php
// This file is generated. Do not modify it manually.
return array(
	'numbers-api' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'flex-perception/numbers-api',
		'version' => '1.0.0',
		'title' => 'Numbers API',
		'category' => 'widgets',
		'icon' => 'info',
		'description' => 'Display interesting facts about numbers from the Numbers API.',
		'example' => array(
			
		),
		'attributes' => array(
			'numberType' => array(
				'type' => 'string',
				'default' => 'random'
			),
			'factType' => array(
				'type' => 'string',
				'default' => 'trivia'
			),
			'number' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'numbers-api',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
