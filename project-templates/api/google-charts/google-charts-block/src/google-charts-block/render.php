<?php
/**
 * Render callback for the Google Charts Block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the block content.
 */

$chart_title      = isset( $attributes['chartTitle'] ) ? $attributes['chartTitle'] : __( 'Sample Pie Chart', 'google-charts-block' );
$chart_data       = isset( $attributes['chartData'] ) ? $attributes['chartData'] : array();
$color_scheme     = isset( $attributes['colorScheme'] ) ? $attributes['colorScheme'] : 'default';
$chart_width      = isset( $attributes['chartWidth'] ) ? $attributes['chartWidth'] : 100;
$chart_height     = isset( $attributes['chartHeight'] ) ? $attributes['chartHeight'] : 400;
$enable_export    = isset( $attributes['enableExport'] ) ? $attributes['enableExport'] : true;
$unique_id        = 'google-chart-' . wp_unique_id();
$wrapper_attrs    = get_block_wrapper_attributes();

// Sanitize chart data.
$sanitized_data = array();
foreach ( $chart_data as $item ) {
	$sanitized_data[] = array(
		'label' => sanitize_text_field( $item['label'] ),
		'value' => absint( $item['value'] ),
	);
}

// Color schemes.
$color_schemes = array(
	'default' => array( '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099' ),
	'pastel'  => array( '#B4D7E8', '#F7CAC9', '#92A8D1', '#88B5A3', '#F5C6CB' ),
	'vibrant' => array( '#E63946', '#F1FA8C', '#1D3557', '#06FFA5', '#A8DADC' ),
	'earth'   => array( '#8B4513', '#228B22', '#D2691E', '#556B2F', '#CD853F' ),
);

$selected_colors = isset( $color_schemes[ $color_scheme ] ) ? $color_schemes[ $color_scheme ] : $color_schemes['default'];

// Build chart configuration.
$chart_config = array(
	'chartTitle'    => esc_html( $chart_title ),
	'chartData'     => $sanitized_data,
	'colors'        => $selected_colors,
	'width'         => $chart_width === 100 ? '100%' : absint( $chart_width ) . '%',
	'height'        => absint( $chart_height ),
	'enableExport'  => (bool) $enable_export,
);

?>
<div <?php echo $wrapper_attrs; ?>>
	<div
		id="<?php echo esc_attr( $unique_id ); ?>"
		class="google-charts-block__chart"
		data-chart-config="<?php echo esc_attr( wp_json_encode( $chart_config ) ); ?>"
		style="width: <?php echo esc_attr( $chart_config['width'] ); ?>; height: <?php echo esc_attr( $chart_config['height'] ); ?>px;"
	>
		<noscript>
			<?php esc_html_e( 'Please enable JavaScript to view this chart.', 'google-charts-block' ); ?>
		</noscript>
	</div>
	<?php if ( $enable_export ) : ?>
		<div class="google-charts-block__export">
			<button
				class="google-charts-block__export-btn"
				data-chart-id="<?php echo esc_attr( $unique_id ); ?>"
			>
				<?php esc_html_e( 'Download Chart', 'google-charts-block' ); ?>
			</button>
		</div>
	<?php endif; ?>
</div>
