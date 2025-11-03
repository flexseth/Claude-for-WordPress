<?php
/**
 * Plugin Name:       Numbers API
 * Description:       Display interesting facts about numbers from the Numbers API.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Flex Perception
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       numbers-api
 *
 * @package FlexPerception
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function flex_perception_numbers_api_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'flex_perception_numbers_api_block_init' );

/**
 * Register REST API endpoint for proxying Numbers API requests.
 */
function flex_perception_numbers_api_register_rest_route() {
	register_rest_route(
		'numbers-api/v1',
		'/fact',
		array(
			'methods'             => 'GET',
			'callback'            => 'flex_perception_numbers_api_get_fact',
			'permission_callback' => '__return_true',
			'args'                => array(
				'type' => array(
					'required'          => false,
					'default'           => 'random',
					'sanitize_callback' => 'sanitize_text_field',
					'validate_callback' => function ( $param ) {
						return in_array( $param, array( 'random', 'specific' ), true );
					},
				),
				'fact' => array(
					'required'          => false,
					'default'           => 'trivia',
					'sanitize_callback' => 'sanitize_text_field',
					'validate_callback' => function ( $param ) {
						return in_array( $param, array( 'trivia', 'math', 'date', 'year' ), true );
					},
				),
				'num'  => array(
					'required'          => false,
					'default'           => '',
					'sanitize_callback' => 'sanitize_text_field',
				),
			),
		)
	);
}
add_action( 'rest_api_init', 'flex_perception_numbers_api_register_rest_route' );

/**
 * Fetch number fact from Numbers API via server-side proxy.
 *
 * @param WP_REST_Request $request REST request object.
 * @return WP_REST_Response|WP_Error Response object or error.
 */
function flex_perception_numbers_api_get_fact( $request ) {
	$number_type = $request->get_param( 'type' );
	$fact_type   = $request->get_param( 'fact' );
	$number      = $request->get_param( 'num' );

	// Build API URL.
	$api_url = 'http://numbersapi.com/';

	if ( 'random' === $number_type ) {
		$api_url .= 'random/' . $fact_type;
	} elseif ( 'specific' === $number_type && ! empty( $number ) ) {
		$api_url .= absint( $number ) . '/' . $fact_type;
	} else {
		$api_url .= 'random/' . $fact_type;
	}

	// Check transient cache first.
	$cache_key = 'numbers_api_' . md5( $api_url );
	$cached    = get_transient( $cache_key );

	if ( false !== $cached ) {
		return new WP_REST_Response(
			array(
				'fact'   => $cached,
				'cached' => true,
			),
			200
		);
	}

	// Fetch from Numbers API.
	$response = wp_remote_get(
		$api_url,
		array(
			'timeout' => 10,
			'headers' => array(
				'User-Agent' => 'WordPress/Numbers-API-Block',
			),
		)
	);

	if ( is_wp_error( $response ) ) {
		return new WP_Error(
			'api_error',
			__( 'Error connecting to Numbers API.', 'numbers-api' ),
			array( 'status' => 500 )
		);
	}

	$body = wp_remote_retrieve_body( $response );

	if ( empty( $body ) ) {
		return new WP_Error(
			'empty_response',
			__( 'Empty response from Numbers API.', 'numbers-api' ),
			array( 'status' => 500 )
		);
	}

	// Cache for 1 hour.
	set_transient( $cache_key, $body, HOUR_IN_SECONDS );

	return new WP_REST_Response(
		array(
			'fact'   => $body,
			'cached' => false,
		),
		200
	);
}
