# Numbers API Block

Display interesting facts about numbers from the [Numbers API](https://numbersapi.com) in your WordPress content.

## Description

The Numbers API block fetches and displays fascinating trivia, mathematical facts, dates, and year information about numbers. Perfect for educational content, fun facts sections, or adding engaging numerical content to your WordPress site.

## Features

- **Multiple Number Types**: Choose between random numbers or specific numbers
- **Four Fact Categories**:
  - Trivia - Interesting facts about numbers
  - Math - Mathematical properties and facts
  - Date - Historical events on specific dates
  - Year - Events from specific years
- **Real-time API Integration**: Fetches fresh facts from numbersapi.com
- **WordPress Block Editor**: Fully integrated with Gutenberg
- **Dynamic Rendering**: Server-side rendering with client-side API fetching
- **Customizable Settings**: Easy-to-use controls in the block inspector
- **Internationalization Ready**: Full i18n support
- **Accessible**: Follows WordPress accessibility standards

## Installation

1. Upload the `numbers-api` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Add the "Numbers API" block to any post or page

## Usage

1. Add a new block in the WordPress editor
2. Search for "Numbers API"
3. Insert the block
4. Configure settings in the right sidebar:
   - **Number Type**: Select "Random" or "Specific Number"
   - **Number**: If "Specific Number" is selected, enter a number
   - **Fact Type**: Choose from Trivia, Math, Date, or Year

The block will automatically fetch and display a fact based on your settings.

## Requirements

- WordPress 6.7 or higher
- PHP 7.4 or higher

## Development

### Build

```bash
npm install
npm run build
```

### Development Mode

```bash
npm start
```

### Code Standards

This plugin follows WordPress Coding Standards for PHP, JavaScript, and CSS.

## License

This plugin is licensed under GPL-2.0-or-later.

## Author

Flex Perception

## API Credit

This plugin uses the [Numbers API](https://numbersapi.com) to fetch number facts.

## Support

For issues and feature requests, please use the GitHub repository issue tracker.
