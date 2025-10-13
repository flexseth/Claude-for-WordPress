# Testing Documentation

## Overview

This document provides comprehensive testing guidelines for the **Zero BS CRM - Add to Admin Menu** plugin.

---

## Table of Contents

1. [Test Environment Setup](#test-environment-setup)
2. [Unit Tests](#unit-tests)
3. [Integration Tests](#integration-tests)
4. [Manual Testing](#manual-testing)
5. [Browser Testing](#browser-testing)
6. [Accessibility Testing](#accessibility-testing)
7. [Security Testing](#security-testing)
8. [Performance Testing](#performance-testing)

---

## Test Environment Setup

### Prerequisites

- WordPress test environment (local or staging)
- Zero BS CRM (Jetpack CRM) plugin installed
- PHPUnit 9.0 or higher (for automated tests)
- WordPress Test Suite
- PHP 7.4 or higher

### Installing WordPress Test Suite

```bash
# Install WordPress test suite
bash bin/install-wp-tests.sh wordpress_test root '' localhost latest

# Or for specific WordPress version
bash bin/install-wp-tests.sh wordpress_test root '' localhost 6.4
```

### Running Tests

```bash
# Run all tests
phpunit

# Run specific test file
phpunit tests/test-zbscrm-admin-bar-links.php

# Run with coverage report
phpunit --coverage-html coverage/
```

---

## Unit Tests

Unit tests verify individual functions work correctly in isolation.

### Test Functions

#### Test: Plugin Constants Defined

```php
public function test_constants_defined() {
    $this->assertTrue( defined( 'ZBSCRM_ADMIN_BAR_LINKS_VERSION' ) );
    $this->assertTrue( defined( 'ZBSCRM_ADMIN_BAR_LINKS_BASENAME' ) );
    $this->assertTrue( defined( 'ZBSCRM_ADMIN_BAR_LINKS_PATH' ) );
    $this->assertTrue( defined( 'ZBSCRM_ADMIN_BAR_LINKS_URL' ) );
}
```

#### Test: Hooks Registered

```php
public function test_hooks_registered() {
    $this->assertEquals( 10, has_action( 'plugins_loaded', 'zbscrm_admin_bar_links_load_textdomain' ) );
    $this->assertEquals( 100, has_action( 'admin_bar_menu', 'zbscrm_admin_bar_links_add_admin_bar_items' ) );
    $this->assertEquals( 10, has_action( 'admin_notices', 'zbscrm_admin_bar_links_check_dependencies' ) );
}
```

#### Test: Zero BS CRM Detection

```php
public function test_is_zbscrm_active_returns_false_when_not_active() {
    $this->assertFalse( zbscrm_admin_bar_links_is_zbscrm_active() );
}
```

#### Test: URL Generation

```php
public function test_get_add_contact_url() {
    $url = zbscrm_admin_bar_links_get_add_contact_url();
    $this->assertStringContainsString( 'admin.php', $url );
    $this->assertStringContainsString( 'page=zbs-add-edit', $url );
    $this->assertStringContainsString( 'zbstype=contact', $url );
}

public function test_get_add_company_url() {
    $url = zbscrm_admin_bar_links_get_add_company_url();
    $this->assertStringContainsString( 'zbstype=company', $url );
}
```

#### Test: Filters Work

```php
public function test_add_contact_url_filter() {
    $custom_url = 'https://example.com/custom';
    add_filter( 'zbscrm_admin_bar_add_contact_url', function() use ( $custom_url ) {
        return $custom_url;
    });

    $url = zbscrm_admin_bar_links_get_add_contact_url();
    $this->assertEquals( $custom_url, $url );

    remove_all_filters( 'zbscrm_admin_bar_add_contact_url' );
}
```

---

## Integration Tests

Integration tests verify the plugin works correctly with WordPress and Zero BS CRM.

### Test Scenarios

#### Scenario 1: Plugin Activation
1. Activate the plugin
2. Verify no errors occur
3. Check that hooks are registered
4. Verify constants are defined

#### Scenario 2: With Zero BS CRM Active
1. Activate Zero BS CRM
2. Activate this plugin
3. Log in as administrator
4. Verify admin bar links appear
5. Click links and verify correct pages load

#### Scenario 3: Without Zero BS CRM Active
1. Deactivate Zero BS CRM
2. Plugin remains active
3. Verify admin notice appears
4. Verify no admin bar links added
5. No PHP errors or warnings

#### Scenario 4: User Capabilities
1. Test with administrator (should see links)
2. Test with editor (should NOT see links)
3. Test with custom role with `admin_zerobs_customers` capability (should see links)

#### Scenario 5: Multisite
1. Network activate plugin
2. Test on multiple subsites
3. Verify functionality on each site

---

## Manual Testing

### Manual Test Checklist

#### Installation & Activation
- [ ] Upload plugin via WordPress admin
- [ ] Upload plugin via FTP
- [ ] Activate successfully
- [ ] No PHP errors in debug.log
- [ ] No JavaScript errors in browser console

#### Admin Bar Links
- [ ] Links appear under "New" menu
- [ ] "Customer" link present
- [ ] "Company" link present
- [ ] Links have correct URLs
- [ ] Clicking links navigates to correct pages
- [ ] Links appear in admin area
- [ ] Links appear on front end (when admin bar visible)

#### User Roles
- [ ] Administrator sees links
- [ ] Editor does NOT see links (by default)
- [ ] Author does NOT see links
- [ ] Contributor does NOT see links
- [ ] Subscriber does NOT see links
- [ ] Custom role with CRM capability sees links

#### Dependencies
- [ ] Admin notice shows when Zero BS CRM not active
- [ ] Notice is dismissible
- [ ] No links appear when Zero BS CRM not active
- [ ] Links appear when Zero BS CRM is activated
- [ ] Works with legacy "Zero BS CRM" name
- [ ] Works with new "Jetpack CRM" name

#### Internationalization
- [ ] Text is translatable
- [ ] POT file can be generated
- [ ] Translation loads from `/languages` folder
- [ ] Admin notice is translated
- [ ] Menu items are translated

#### Filters & Actions
- [ ] `zbscrm_admin_bar_add_contact_url` filter works
- [ ] `zbscrm_admin_bar_add_company_url` filter works
- [ ] `zbscrm_admin_bar_before_add_items` action fires
- [ ] `zbscrm_admin_bar_after_add_items` action fires

---

## Browser Testing

### Supported Browsers

Test in the following browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Browser Test Checklist

For each browser:
- [ ] Admin bar displays correctly
- [ ] Menu items are clickable
- [ ] Hover states work
- [ ] No console errors
- [ ] Responsive on mobile devices

---

## Accessibility Testing

### WCAG 2.1 AA Compliance

#### Keyboard Navigation
- [ ] Can tab to admin bar menu
- [ ] Can open "New" menu with keyboard
- [ ] Can navigate to "Customer" link
- [ ] Can navigate to "Company" link
- [ ] Can activate links with Enter key

#### Screen Reader Testing
- [ ] Links are properly announced
- [ ] Menu structure is logical
- [ ] Title attributes provide context
- [ ] No accessibility errors in WAVE tool
- [ ] No accessibility errors in axe DevTools

#### Visual Accessibility
- [ ] Sufficient color contrast
- [ ] Text is readable at 200% zoom
- [ ] No information conveyed by color alone
- [ ] Focus indicators are visible

---

## Security Testing

### Security Test Checklist

#### Authentication & Authorization
- [ ] Anonymous users cannot see links
- [ ] Unauthorized users cannot see links
- [ ] Capability checks work correctly
- [ ] Direct URL access respects permissions

#### XSS Prevention
- [ ] All output is properly escaped
- [ ] No unescaped user input
- [ ] URL escaping works correctly
- [ ] Admin notice escaping works

#### SQL Injection
- [ ] No database queries performed (N/A)

#### CSRF Protection
- [ ] No forms submitted (N/A)

#### File Security
- [ ] Direct file access prevented
- [ ] No sensitive information exposed
- [ ] File permissions are correct

#### Plugin Check
- [ ] Run WordPress Plugin Check plugin
- [ ] Address any warnings or errors
- [ ] Verify no security issues reported

---

## Performance Testing

### Performance Metrics

#### Load Time Testing
```bash
# Use wp-cli to benchmark
wp eval 'do_action( "admin_bar_menu", $GLOBALS["wp_admin_bar"] );'
```

#### Performance Checklist
- [ ] No JavaScript files loaded
- [ ] No CSS files loaded
- [ ] No database queries performed
- [ ] No external HTTP requests
- [ ] Load time < 1ms
- [ ] Memory usage < 100KB
- [ ] No impact on page load time

#### Caching Plugin Compatibility
- [ ] Works with WP Super Cache
- [ ] Works with W3 Total Cache
- [ ] Works with WP Rocket
- [ ] Works with Redis Object Cache
- [ ] Works with Memcached

### Performance Tools

- **Query Monitor**: Monitor hooks and performance
- **Debug Bar**: Check for errors and performance issues
- **New Relic**: Application performance monitoring
- **GTmetrix**: Page speed testing
- **Pingdom**: Website speed test

---

## Regression Testing

Before each release, run the complete test suite:

1. [ ] All unit tests pass
2. [ ] All integration tests pass
3. [ ] Manual testing checklist complete
4. [ ] Browser testing complete
5. [ ] Accessibility testing complete
6. [ ] Security testing complete
7. [ ] Performance testing complete
8. [ ] No new issues in debug.log
9. [ ] Plugin Check passes
10. [ ] Documentation is up to date

---

## Continuous Integration

### GitHub Actions Workflow

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        php: ['7.4', '8.0', '8.1', '8.2']
        wordpress: ['5.8', '6.0', '6.4', 'latest']

    steps:
      - uses: actions/checkout@v2
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: ${{ matrix.php }}
      - name: Install WordPress Test Suite
        run: bash bin/install-wp-tests.sh wordpress_test root '' localhost ${{ matrix.wordpress }}
      - name: Run PHPUnit
        run: phpunit
```

---

## Test Coverage Goals

- **Code Coverage**: > 80%
- **Function Coverage**: 100%
- **Line Coverage**: > 90%
- **Branch Coverage**: > 80%

Generate coverage report:
```bash
phpunit --coverage-html coverage/
open coverage/index.html
```

---

## Reporting Test Results

When reporting test results:

1. Include environment details (PHP version, WordPress version, etc.)
2. Specify which tests were run
3. Note any failures or issues
4. Include debug.log contents if errors occurred
5. Attach screenshots for visual issues

---

## Support

For testing questions or issues:
- [GitHub Issues](https://github.com/yourusername/zbscrm-admin-bar-links/issues)
- Include "Testing" label on issues
