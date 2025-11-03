/**
 * The save function for dynamic blocks.
 *
 * Since this is a dynamic block that uses a PHP render callback,
 * the save function returns null. The block content is generated
 * server-side via the render.php file.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {null} Null for dynamic blocks.
 */
export default function save() {
	return null;
}
