<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$number_type = isset( $attributes['numberType'] ) ? $attributes['numberType'] : 'random';
$fact_type   = isset( $attributes['factType'] ) ? $attributes['factType'] : 'trivia';
$number      = isset( $attributes['number'] ) ? $attributes['number'] : '';

// Store attributes as data attributes for the JavaScript to use.
$data_attrs = sprintf(
	'data-number-type="%s" data-fact-type="%s" data-number="%s"',
	esc_attr( $number_type ),
	esc_attr( $fact_type ),
	esc_attr( $number )
);
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="numbers-api-display" <?php echo $data_attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<?php esc_html_e( 'Loading...', 'numbers-api' ); ?>
	</div>
</div>
