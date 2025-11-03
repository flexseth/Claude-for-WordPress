/**
 * @file Edit component for the Numbers API block.
 * @module numbers-api/edit
 * @requires @wordpress/i18n
 * @requires @wordpress/block-editor
 * @requires @wordpress/components
 * @requires @wordpress/element
 * @requires @wordpress/api-fetch
 */

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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * WordPress components for settings panel.
 */
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

/**
 * React hooks for state and effects.
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * WordPress API fetch utility.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Fetch a number fact from the WordPress REST API proxy.
 *
 * This function calls the WordPress REST API endpoint that acts as a secure
 * proxy to the Numbers API. The server-side proxy handles the insecure HTTP
 * connection to numbersapi.com, while the client communicates only via HTTPS.
 *
 * @async
 * @function fetchNumberFact
 * @param {string} numberType - Type of number selection ('random' or 'specific').
 * @param {string} factType   - Type of fact to retrieve ('trivia', 'math', 'date', or 'year').
 * @param {string} number     - Specific number if numberType is 'specific', empty string otherwise.
 * @returns {Promise<string>} Promise that resolves to the number fact text.
 * @throws {Error} If the API request fails or returns invalid data.
 * @example
 * // Fetch a random trivia fact
 * const fact = await fetchNumberFact('random', 'trivia', '');
 *
 * @example
 * // Fetch a math fact about the number 42
 * const fact = await fetchNumberFact('specific', 'math', '42');
 */
async function fetchNumberFact( numberType, factType, number ) {
	const params = new URLSearchParams( {
		type: numberType,
		fact: factType,
	} );

	if ( numberType === 'specific' && number ) {
		params.append( 'num', number );
	}

	const response = await apiFetch( {
		path: `/numbers-api/v1/fact?${ params.toString() }`,
	} );

	return response.fact;
}

/**
 * Block editor component for the Numbers API block.
 *
 * This component renders the block in the WordPress editor, providing
 * controls in the InspectorControls sidebar for customizing the number
 * type and fact type. It fetches and displays a preview of the number
 * fact using the WordPress REST API proxy.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @function Edit
 * @param {Object} props - Component props.
 * @param {Object} props.attributes - Block attributes from block.json.
 * @param {string} props.attributes.numberType - Type of number ('random' or 'specific').
 * @param {string} props.attributes.factType - Type of fact ('trivia', 'math', 'date', or 'year').
 * @param {string} props.attributes.number - The specific number when numberType is 'specific'.
 * @param {Function} props.setAttributes - Function to update block attributes.
 * @returns {JSX.Element} The block editor UI with controls and preview.
 * @example
 * // WordPress automatically renders this component when the block is added
 * <Edit attributes={{ numberType: 'random', factType: 'trivia', number: '' }} setAttributes={fn} />
 */
export default function Edit( { attributes, setAttributes } ) {
	const { numberType, factType, number } = attributes;
	const [ fact, setFact ] = useState( __( 'Loading...', 'numbers-api' ) );
	const [ isLoading, setIsLoading ] = useState( true );

	useEffect( () => {
		setIsLoading( true );
		fetchNumberFact( numberType, factType, number )
			.then( ( newFact ) => {
				setFact( newFact );
				setIsLoading( false );
			} )
			.catch( () => {
				setFact( __( 'Error loading number fact.', 'numbers-api' ) );
				setIsLoading( false );
			} );
	}, [ numberType, factType, number ] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Number Settings', 'numbers-api' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Number Type', 'numbers-api' ) }
						value={ numberType }
						options={ [
							{ label: __( 'Random', 'numbers-api' ), value: 'random' },
							{ label: __( 'Specific Number', 'numbers-api' ), value: 'specific' },
						] }
						onChange={ ( value ) => setAttributes( { numberType: value } ) }
					/>
					{ numberType === 'specific' && (
						<TextControl
							label={ __( 'Number', 'numbers-api' ) }
							value={ number }
							onChange={ ( value ) => setAttributes( { number: value } ) }
							help={ __( 'Enter a number to get a fact about.', 'numbers-api' ) }
						/>
					) }
					<SelectControl
						label={ __( 'Fact Type', 'numbers-api' ) }
						value={ factType }
						options={ [
							{ label: __( 'Trivia', 'numbers-api' ), value: 'trivia' },
							{ label: __( 'Math', 'numbers-api' ), value: 'math' },
							{ label: __( 'Date', 'numbers-api' ), value: 'date' },
							{ label: __( 'Year', 'numbers-api' ), value: 'year' },
						] }
						onChange={ ( value ) => setAttributes( { factType: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="numbers-api-display">
					{ isLoading ? __( 'Loading...', 'numbers-api' ) : fact }
				</div>
			</div>
		</>
	);
}
