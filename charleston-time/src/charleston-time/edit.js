/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * React hooks for state and effects.
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Get Charleston time formatted as 10:35AM or 3:25PM
 *
 * @return {string} Formatted time string.
 */
function getCharlestonTime() {
	const now = new Date();
	const charlestonTime = new Date(
		now.toLocaleString( 'en-US', { timeZone: 'America/New_York' } )
	);

	let hours = charlestonTime.getHours();
	const minutes = charlestonTime.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12; // Convert 0 to 12

	const minutesStr = minutes < 10 ? '0' + minutes : minutes;

	return `${ hours }:${ minutesStr }${ ampm }`;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [ time, setTime ] = useState( getCharlestonTime() );

	useEffect( () => {
		const interval = setInterval( () => {
			setTime( getCharlestonTime() );
		}, 60000 ); // Update every minute (60000ms)

		return () => clearInterval( interval );
	}, [] );

	return (
		<div { ...useBlockProps() }>
			<div className="charleston-time-display">
				{ time }
			</div>
		</div>
	);
}
