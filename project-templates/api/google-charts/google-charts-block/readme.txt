=== Google Charts Block ===
Contributors:      flexseth
Tags:              block, chart, pie chart, google charts, data visualization, graphs
Requires at least: 6.7
Tested up to:      6.7
Requires PHP:      7.4
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Display beautiful, customizable Google Charts pie charts with your data directly in the WordPress block editor.

== Description ==

Google Charts Block allows you to easily create and display interactive pie charts powered by the Google Charts API. Perfect for displaying statistics, survey results, sales data, or any other data that benefits from visual representation.

= Features =

* **Easy to Use**: Intuitive block editor interface with drag-and-drop functionality
* **Customizable Data**: Add, edit, and remove data points directly from the block settings
* **Multiple Color Schemes**: Choose from Default, Pastel, Vibrant, and Earth color palettes
* **Responsive Design**: Charts automatically adjust to fit different screen sizes
* **Adjustable Sizing**: Control chart width (50-100%) and height (200-800px)
* **Export Functionality**: Download charts as SVG files for use in presentations or documents
* **Dynamic Rendering**: Uses server-side rendering for optimal performance
* **Accessible**: Follows WordPress accessibility standards
* **Translation Ready**: Fully internationalized and ready for translation

= Perfect For =

* Business dashboards
* Survey results
* Sales reports
* Budget breakdowns
* Market share visualization
* Educational content
* Data journalism

= How It Works =

1. Add the Google Charts Block to your post or page
2. Customize your chart title in the block settings
3. Add or edit data points (labels and values)
4. Choose your preferred color scheme
5. Adjust chart dimensions to fit your layout
6. Publish and view your beautiful chart!

The block uses the powerful Google Charts API to render interactive, professional-looking charts that match your data exactly.

== Installation ==

= Automatic Installation =

1. Log in to your WordPress admin panel
2. Navigate to Plugins > Add New
3. Search for "Google Charts Block"
4. Click "Install Now" and then "Activate"

= Manual Installation =

1. Download the plugin zip file
2. Upload the `google-charts-block` folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

= After Activation =

1. Edit any post or page
2. Click the '+' button to add a new block
3. Search for "Google Charts Block"
4. Add the block to your content
5. Configure your chart using the block settings in the sidebar

== Frequently Asked Questions ==

= Do I need a Google Charts API key? =

No! The Google Charts library is free to use and doesn't require an API key.

= Can I change the chart type? =

Currently, the plugin supports pie charts. Additional chart types may be added in future versions.

= Is the chart responsive? =

Yes! Charts automatically adjust to fit different screen sizes and can be configured to use percentage-based widths.

= Can I export the charts? =

Yes! When the export feature is enabled, users can download charts as SVG files by clicking the "Download Chart" button.

= How do I add more data points? =

In the block settings panel, navigate to the "Chart Data" section and click the "Add Data Row" button to add new data points.

= Can I customize the colors? =

Yes! Choose from four pre-configured color schemes: Default, Pastel, Vibrant, and Earth tones.

= Is it compatible with my theme? =

The block is designed to work with any properly coded WordPress theme that supports the block editor.

= Does it work with the Classic Editor? =

No, this plugin requires the WordPress block editor (Gutenberg).

== Screenshots ==

1. Google Charts Block in the block editor with customization options
2. Example pie chart on the front-end with export button
3. Block settings panel showing chart configuration options
4. Chart Data panel for adding and editing data points

== Changelog ==

= 1.0.0 =
* Fixed: Editor crash when block is saved and reloaded
* Fixed: Google Charts library loading to prevent duplicate script tags
* Fixed: State management using proper React hooks
* Fixed: Placeholder visibility issue
* Improved: Chart instance reuse for better performance
* Changed: Chart width now uses 100% by default for better responsiveness
* Changed: Script loading moved to document.head
* Stability: Block now reliably renders in editor after page save/reload
* Stability: Chart persists correctly across editor sessions

= 0.1.0 =
* Initial release
* Pie chart visualization with Google Charts API
* Customizable chart title
* Add, edit, and remove data points
* Four color scheme options (Default, Pastel, Vibrant, Earth)
* Responsive width control (50-100%)
* Adjustable height control (200-800px)
* SVG export functionality
* Dynamic server-side rendering
* Full internationalization support
* Accessibility compliant

== Upgrade Notice ==

= 1.0.0 =
Critical stability update! Fixes editor crashes when blocks are saved and reloaded. All users should update immediately.

= 0.1.0 =
Initial release of Google Charts Block. Create beautiful pie charts in WordPress!
