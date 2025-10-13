/**
 * Zero BS CRM Command Palette Integration
 *
 * Registers commands for adding new contacts and companies.
 *
 * @package ZBSCRMAdminBarLinks
 * @since 1.1.0
 */

( function( wp ) {
	'use strict';

	if ( ! wp || ! wp.data || ! wp.commands ) {
		return;
	}

	const { useCommand } = wp.commands;
	const { useEffect } = wp.element;

	// Register command for adding new contact
	function ZBSCRMAddContactCommand() {
		useCommand( {
			name: 'zbscrm/add-contact',
			label: zbscrmCommandPalette.addContactLabel,
			icon: 'businessperson',
			callback: () => {
				window.location.href = zbscrmCommandPalette.addContactUrl;
			},
			context: 'site-editor'
		} );

		return null;
	}

	// Register command for adding new company
	function ZBSCRMAddCompanyCommand() {
		useCommand( {
			name: 'zbscrm/add-company',
			label: zbscrmCommandPalette.addCompanyLabel,
			icon: 'building',
			callback: () => {
				window.location.href = zbscrmCommandPalette.addCompanyUrl;
			},
			context: 'site-editor'
		} );

		return null;
	}

	// Register commands on DOM ready
	if ( wp.domReady ) {
		wp.domReady( function() {
			// Use React to render commands
			if ( wp.element && wp.element.render ) {
				const { render, createElement } = wp.element;

				// Create container for commands (hidden)
				const container = document.createElement( 'div' );
				container.style.display = 'none';
				document.body.appendChild( container );

				// Render both commands
				render(
					createElement( 'div', null,
						createElement( ZBSCRMAddContactCommand ),
						createElement( ZBSCRMAddCompanyCommand )
					),
					container
				);
			}
		} );
	}

} )( window.wp );
