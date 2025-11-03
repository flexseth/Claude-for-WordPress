/**
 * @file Block registration for the Numbers API block.
 * @module numbers-api/index
 * @requires @wordpress/blocks
 * @description Main entry point for the Numbers API block. Registers the block
 * type with WordPress and imports necessary styles and components.
 */

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Register the Numbers API block type.
 *
 * This registers the block with WordPress using the metadata from block.json
 * and the Edit component. The block uses dynamic rendering via render.php,
 * so no save function is required.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @see ./edit.js
 * @see ./block.json
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
