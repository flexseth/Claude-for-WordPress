/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

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
 * Update all Charleston time displays on the page
 */
function updateCharlestonTime() {
	const displays = document.querySelectorAll( '.charleston-time-display' );
	const currentTime = getCharlestonTime();

	displays.forEach( ( display ) => {
		display.textContent = currentTime;
	} );
}

// Initialize on page load
document.addEventListener( 'DOMContentLoaded', () => {
	updateCharlestonTime();
	// Update every minute
	setInterval( updateCharlestonTime, 60000 ); // 60000ms = 1 minute
} );
