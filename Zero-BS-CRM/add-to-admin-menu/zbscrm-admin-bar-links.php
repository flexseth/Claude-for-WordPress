<?php
/**
 * Plugin Name: Zero BS CRM - Add to Admin Menu
 * Plugin URI: https://github.com/yourusername/zbscrm-admin-bar-links
 * Description: Adds "Add New Contact" and "Add New Company" quick links to the WordPress admin bar for Zero BS CRM (Jetpack CRM).
 * Version: 1.0.1
 * Requires at least: 5.8
 * Requires PHP: 7.4
 * Author: Your Name
 * Author URI: https://yourwebsite.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: zbscrm-admin-bar-links
 * Domain Path: /languages
 *
 * @package ZBSCRMAdminBarLinks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 */
define( 'ZBSCRM_ADMIN_BAR_LINKS_VERSION', '1.0.1' );

/**
 * Plugin base name.
 */
define( 'ZBSCRM_ADMIN_BAR_LINKS_BASENAME', plugin_basename( __FILE__ ) );

/**
 * Plugin directory path.
 */
define( 'ZBSCRM_ADMIN_BAR_LINKS_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Plugin directory URL.
 */
define( 'ZBSCRM_ADMIN_BAR_LINKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Load the plugin text domain for translation.
 *
 * @since 1.0.0
 * @return void
 */
function zbscrm_admin_bar_links_load_textdomain() {
	load_plugin_textdomain(
		'zbscrm-admin-bar-links',
		false,
		dirname( ZBSCRM_ADMIN_BAR_LINKS_BASENAME ) . '/languages'
	);
}
add_action( 'plugins_loaded', 'zbscrm_admin_bar_links_load_textdomain' );

/**
 * Check if Zero BS CRM (Jetpack CRM) is active.
 *
 * @since 1.0.0
 * @return bool True if Zero BS CRM is active, false otherwise.
 */
function zbscrm_admin_bar_links_is_zbscrm_active() {
	// Check for Zero BS CRM constant or class.
	return defined( 'ZBS_ROOTFILE' ) || class_exists( 'ZeroBSCRM' );
}

/**
 * Check plugin dependencies and show admin notice if needed.
 *
 * @since 1.0.0
 * @return void
 */
function zbscrm_admin_bar_links_check_dependencies() {
	if ( ! zbscrm_admin_bar_links_is_zbscrm_active() ) {
		$class   = 'notice notice-warning';
		$message = sprintf(
			/* translators: %s: Plugin name */
			__( '%s requires Zero BS CRM (Jetpack CRM) to be installed and activated.', 'zbscrm-admin-bar-links' ),
			'<strong>' . esc_html__( 'Zero BS CRM - Add to Admin Menu', 'zbscrm-admin-bar-links' ) . '</strong>'
		);

		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
	}
}
add_action( 'admin_notices', 'zbscrm_admin_bar_links_check_dependencies' );

/**
 * Get the capability required to access Zero BS CRM.
 *
 * Uses Zero BS CRM's own capability if available, otherwise falls back to manage_options.
 *
 * @since 1.0.0
 * @return string The required capability.
 */
function zbscrm_admin_bar_links_get_required_capability() {
	// Zero BS CRM uses 'admin_zerobs_customers' capability for customer management.
	// We'll check for this capability, or fall back to manage_options.
	if ( current_user_can( 'admin_zerobs_customers' ) ) {
		return 'admin_zerobs_customers';
	}

	// Fallback capability.
	return 'manage_options';
}

/**
 * Get the admin URL for adding a new contact/customer.
 *
 * This URL can be filtered using the 'zbscrm_admin_bar_add_contact_url' filter.
 *
 * @since 1.0.0
 * @return string The admin URL for adding a new contact.
 */
function zbscrm_admin_bar_links_get_add_contact_url() {
	$url = admin_url( 'admin.php?page=zbs-add-edit&action=edit&zbstype=contact' );

	/**
	 * Filters the URL for adding a new contact in Zero BS CRM.
	 *
	 * @since 1.0.0
	 *
	 * @param string $url The default URL.
	 */
	return apply_filters( 'zbscrm_admin_bar_add_contact_url', $url );
}

/**
 * Get the admin URL for adding a new company.
 *
 * This URL can be filtered using the 'zbscrm_admin_bar_add_company_url' filter.
 *
 * @since 1.0.0
 * @return string The admin URL for adding a new company.
 */
function zbscrm_admin_bar_links_get_add_company_url() {
	$url = admin_url( 'admin.php?page=zbs-add-edit&action=edit&zbstype=company' );

	/**
	 * Filters the URL for adding a new company in Zero BS CRM.
	 *
	 * @since 1.0.0
	 *
	 * @param string $url The default URL.
	 */
	return apply_filters( 'zbscrm_admin_bar_add_company_url', $url );
}

/**
 * Add menu items to the WordPress admin bar - The WordPress Way.
 *
 * Uses the official WordPress admin_bar_menu hook and WP_Admin_Bar methods.
 *
 * @since 1.0.0
 *
 * @param WP_Admin_Bar $wp_admin_bar The WordPress admin bar object.
 * @return void
 */
function zbscrm_admin_bar_links_add_admin_bar_items( $wp_admin_bar ) {
	// Only add if Zero BS CRM is active.
	if ( ! zbscrm_admin_bar_links_is_zbscrm_active() ) {
		return;
	}

	// Check if user has permission to access Zero BS CRM.
	$capability = zbscrm_admin_bar_links_get_required_capability();
	if ( ! current_user_can( $capability ) ) {
		return;
	}

	/**
	 * Fires before adding admin bar items.
	 *
	 * @since 1.0.0
	 *
	 * @param WP_Admin_Bar $wp_admin_bar The WordPress admin bar object.
	 */
	do_action( 'zbscrm_admin_bar_before_add_items', $wp_admin_bar );

	// Add "Add New Contact" link under "New" menu.
	$wp_admin_bar->add_node(
		array(
			'parent' => 'new-content',
			'id'     => 'zbscrm-add-contact',
			'title'  => __( 'Contact', 'zbscrm-admin-bar-links' ),
			'href'   => esc_url( zbscrm_admin_bar_links_get_add_contact_url() ),
			'meta'   => array(
				'title' => __( 'Add New Contact', 'zbscrm-admin-bar-links' ),
			),
		)
	);

	// Add "Add New Company" link under "New" menu.
	$wp_admin_bar->add_node(
		array(
			'parent' => 'new-content',
			'id'     => 'zbscrm-add-company',
			'title'  => __( 'Company', 'zbscrm-admin-bar-links' ),
			'href'   => esc_url( zbscrm_admin_bar_links_get_add_company_url() ),
			'meta'   => array(
				'title' => __( 'Add New Company', 'zbscrm-admin-bar-links' ),
			),
		)
	);

	/**
	 * Fires after adding admin bar items.
	 *
	 * @since 1.0.0
	 *
	 * @param WP_Admin_Bar $wp_admin_bar The WordPress admin bar object.
	 */
	do_action( 'zbscrm_admin_bar_after_add_items', $wp_admin_bar );
}
add_action( 'admin_bar_menu', 'zbscrm_admin_bar_links_add_admin_bar_items', 100 );
