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
 * WordPress components for the block editor.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
	Placeholder,
} from '@wordpress/components';

import { useEffect, useRef, useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   root0               Block props.
 * @param {Object}   root0.attributes    Block attributes.
 * @param {Function} root0.setAttributes Function to set block attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		chartTitle,
		chartData,
		colorScheme,
		chartWidth,
		chartHeight,
		enableExport,
	} = attributes;

	const chartRef = useRef( null );
	const [ isLoaded, setIsLoaded ] = useState( false );
	const chartInstance = useRef( null );

	// Load Google Charts library once
	useEffect( () => {
		if ( window.google && window.google.charts ) {
			setIsLoaded( true );
			return;
		}

		const existingScript = document.querySelector(
			'script[src="https://www.gstatic.com/charts/loader.js"]'
		);

		if ( existingScript ) {
			existingScript.addEventListener( 'load', () => {
				if ( window.google && window.google.charts ) {
					window.google.charts.load( 'current', {
						packages: [ 'corechart' ],
					} );
					window.google.charts.setOnLoadCallback( () => {
						setIsLoaded( true );
					} );
				}
			} );
			return;
		}

		const script = document.createElement( 'script' );
		script.src = 'https://www.gstatic.com/charts/loader.js';
		script.async = true;
		script.onload = () => {
			window.google.charts.load( 'current', {
				packages: [ 'corechart' ],
			} );
			window.google.charts.setOnLoadCallback( () => {
				setIsLoaded( true );
			} );
		};
		document.head.appendChild( script );
	}, [] );

	// Draw chart when loaded or attributes change
	useEffect( () => {
		if (
			! isLoaded ||
			! chartRef.current ||
			! window.google ||
			! window.google.visualization
		) {
			return;
		}

		const colorSchemes = {
			default: [
				'#3366CC',
				'#DC3912',
				'#FF9900',
				'#109618',
				'#990099',
			],
			pastel: [
				'#B4D7E8',
				'#F7CAC9',
				'#92A8D1',
				'#88B5A3',
				'#F5C6CB',
			],
			vibrant: [
				'#E63946',
				'#F1FA8C',
				'#1D3557',
				'#06FFA5',
				'#A8DADC',
			],
			earth: [
				'#8B4513',
				'#228B22',
				'#D2691E',
				'#556B2F',
				'#CD853F',
			],
		};

		try {
			const data = new window.google.visualization.DataTable();
			data.addColumn( 'string', 'Label' );
			data.addColumn( 'number', 'Value' );

			chartData.forEach( ( item ) => {
				data.addRow( [ item.label, item.value ] );
			} );

			const options = {
				title: chartTitle,
				width: '100%',
				height: chartHeight,
				colors: colorSchemes[ colorScheme ] || colorSchemes.default,
				pieSliceText: 'percentage',
				legend: { position: 'right' },
			};

			if ( ! chartInstance.current ) {
				chartInstance.current =
					new window.google.visualization.PieChart(
						chartRef.current
					);
			}

			chartInstance.current.draw( data, options );
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( 'Error drawing chart:', error );
		}
	}, [
		isLoaded,
		chartTitle,
		chartData,
		colorScheme,
		chartWidth,
		chartHeight,
	] );

	const addDataRow = () => {
		const newData = [
			...chartData,
			{ label: __( 'New Item', 'google-charts-block' ), value: 10 },
		];
		setAttributes( { chartData: newData } );
	};

	const updateDataRow = ( index, field, value ) => {
		const newData = [ ...chartData ];
		newData[ index ][ field ] =
			field === 'value' ? parseInt( value, 10 ) || 0 : value;
		setAttributes( { chartData: newData } );
	};

	const removeDataRow = ( index ) => {
		const newData = chartData.filter( ( _, i ) => i !== index );
		setAttributes( { chartData: newData } );
	};

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Chart Settings', 'google-charts-block' ) }
					initialOpen={ true }
				>
					<TextControl
						label={ __( 'Chart Title', 'google-charts-block' ) }
						value={ chartTitle }
						onChange={ ( value ) =>
							setAttributes( { chartTitle: value } )
						}
					/>
					<SelectControl
						label={ __( 'Color Scheme', 'google-charts-block' ) }
						value={ colorScheme }
						options={ [
							{
								label: __( 'Default', 'google-charts-block' ),
								value: 'default',
							},
							{
								label: __( 'Pastel', 'google-charts-block' ),
								value: 'pastel',
							},
							{
								label: __( 'Vibrant', 'google-charts-block' ),
								value: 'vibrant',
							},
							{
								label: __( 'Earth', 'google-charts-block' ),
								value: 'earth',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( { colorScheme: value } )
						}
					/>
					<RangeControl
						label={ __(
							'Chart Width (%)',
							'google-charts-block'
						) }
						value={ chartWidth }
						onChange={ ( value ) =>
							setAttributes( { chartWidth: value } )
						}
						min={ 50 }
						max={ 100 }
					/>
					<RangeControl
						label={ __( 'Chart Height', 'google-charts-block' ) }
						value={ chartHeight }
						onChange={ ( value ) =>
							setAttributes( { chartHeight: value } )
						}
						min={ 200 }
						max={ 800 }
					/>
					<ToggleControl
						label={ __(
							'Enable Export',
							'google-charts-block'
						) }
						checked={ enableExport }
						onChange={ ( value ) =>
							setAttributes( { enableExport: value } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Chart Data', 'google-charts-block' ) }
					initialOpen={ false }
				>
					{ chartData.map( ( item, index ) => (
						<div
							key={ index }
							style={ {
								marginBottom: '16px',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '4px',
							} }
						>
							<TextControl
								label={ __( 'Label', 'google-charts-block' ) }
								value={ item.label }
								onChange={ ( value ) =>
									updateDataRow( index, 'label', value )
								}
							/>
							<TextControl
								label={ __( 'Value', 'google-charts-block' ) }
								type="number"
								value={ item.value }
								onChange={ ( value ) =>
									updateDataRow( index, 'value', value )
								}
							/>
							{ chartData.length > 1 && (
								<Button
									isDestructive
									variant="secondary"
									onClick={ () => removeDataRow( index ) }
								>
									{ __( 'Remove', 'google-charts-block' ) }
								</Button>
							) }
						</div>
					) ) }
					<Button variant="primary" onClick={ addDataRow }>
						{ __( 'Add Data Row', 'google-charts-block' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div
					ref={ chartRef }
					className="google-charts-block__chart"
					style={ {
						width: chartWidth === 100 ? '100%' : `${ chartWidth }%`,
						height: `${ chartHeight }px`,
					} }
				>
					{ ! isLoaded && (
						<Placeholder
							label={ __(
								'Google Charts Block',
								'google-charts-block'
							) }
							instructions={ __(
								'Loading Google Charts...',
								'google-charts-block'
							) }
						/>
					) }
				</div>
			</div>
		</>
	);
}
