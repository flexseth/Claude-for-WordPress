/**
 * @file Frontend JavaScript for the Numbers API block.
 * @module numbers-api/view
 * @description This script runs on the frontend to fetch and display number facts
 * from the WordPress REST API proxy when the page loads.
 */

/**
 * Fetch a number fact from the WordPress REST API proxy.
 *
 * This function is called on the frontend to retrieve number facts via
 * the secure WordPress REST API endpoint. It constructs the API URL
 * dynamically based on the current site origin and passes the required
 * parameters to fetch the appropriate fact.
 *
 * @async
 * @function fetchNumberFact
 * @param {string} numberType - Type of number selection ('random' or 'specific').
 * @param {string} factType   - Type of fact to retrieve ('trivia', 'math', 'date', or 'year').
 * @param {string} number     - Specific number if numberType is 'specific', empty string otherwise.
 * @returns {Promise<string>} Promise that resolves to the number fact text.
 * @throws {Error} If the fetch request fails or response cannot be parsed.
 * @example
 * // Fetch a random year fact
 * const fact = await fetchNumberFact('random', 'year', '');
 */
async function fetchNumberFact( numberType, factType, number ) {
	const params = new URLSearchParams( {
		type: numberType,
		fact: factType,
	} );

	if ( numberType === 'specific' && number ) {
		params.append( 'num', number );
	}

	// Construct the REST API URL.
	const apiUrl = `${ window.location.origin }/wp-json/numbers-api/v1/fact?${ params.toString() }`;

	const response = await fetch( apiUrl );
	const data = await response.json();

	return data.fact;
}

/**
 * Update all Numbers API block displays on the page.
 *
 * This function queries the DOM for all Numbers API block instances,
 * reads their data attributes to determine what type of fact to fetch,
 * and updates the display with the fetched content. It handles multiple
 * block instances on the same page independently.
 *
 * @function updateNumbersAPIDisplays
 * @returns {void}
 * @example
 * // Called automatically on DOMContentLoaded
 * updateNumbersAPIDisplays();
 */
function updateNumbersAPIDisplays() {
	const displays = document.querySelectorAll( '.numbers-api-display' );

	displays.forEach( ( display ) => {
		const numberType = display.getAttribute( 'data-number-type' );
		const factType = display.getAttribute( 'data-fact-type' );
		const number = display.getAttribute( 'data-number' );

		fetchNumberFact( numberType, factType, number )
			.then( ( fact ) => {
				display.textContent = fact;
			} )
			.catch( () => {
				display.textContent = 'Error loading number fact.';
			} );
	} );
}

// Initialize on page load
document.addEventListener( 'DOMContentLoaded', () => {
	updateNumbersAPIDisplays();
} );
