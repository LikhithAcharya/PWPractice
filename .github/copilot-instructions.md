# Playwright Automation Project - AI Coding Instructions

## Project Overview
This is a **Playwright test automation** project for E2E and integration testing. The project uses Playwright v1.57 with JavaScript/Node.js (CommonJS module type). Tests run against real browsers (Chromium, Firefox, WebKit) and generate HTML reports.

## Architecture & Test Structure

### Directory Layout
- **`e2e/`** - Primary test suite (configured in `playwright.config.js` as `testDir`)
- **`tests/`** - Legacy/secondary test files (not currently configured to run by default)
- **`playwright-report/`** - Generated HTML test reports (auto-generated)
- **`test-results/`** - Test execution artifacts and traces

**Key Pattern**: New tests should go in `e2e/` directory. The `tests/` folder exists but is disconnected from the config.

### Configuration
**`playwright.config.js`** defines:
- **Test discovery**: Only files in `./e2e/` are executed
- **Parallelization**: Tests run in parallel locally; single-worker on CI (when `CI` env var set)
- **Reporting**: HTML reporter generates reports in `playwright-report/`
- **Tracing**: Enabled on first retry (`trace: 'on-first-retry'`) for debugging failures
- **CI behavior**: Retries 2x, forbids `test.only()` to prevent accidental committed test filters
- **Browser projects**: Configured for Chromium, Firefox, WebKit (mobile configs commented out)

## Critical Commands & Workflows

### Running Tests
```bash
# All tests in e2e/ directory (parallel)
npx playwright test

# Single file
npx playwright test e2e/example.spec.js

# With UI mode (interactive, recommended for development)
npx playwright test --ui

# Headed mode (see browser automation in real time)
npx playwright test --headed

# Debug mode with inspector
npx playwright test --debug
```

### Viewing Reports
```bash
# Open HTML report after test run
npx playwright show-report
```

### Installing Browsers
```bash
# Install Playwright browsers (required after npm install)
npx playwright install
```

## Code Patterns & Conventions

### Test Structure (from `e2e/example.spec.js`)
```javascript
// @ts-check - Enable TypeScript checking in JS files
import { test, expect } from '@playwright/test';

test('test name', async ({ page }) => {
  await page.goto('https://example.com/');
  // Use semantic selectors (preferred over CSS/XPath)
  await page.getByRole('link', { name: 'Text' }).click();
  // Use modern expect syntax
  await expect(page).toHaveTitle(/pattern/);
});
```

### Locator Strategies (in order of preference)
1. **Semantic**: `page.getByRole()`, `page.getByLabel()`, `page.getByPlaceholder()`
2. **Text**: `page.getByText()`
3. **Test ID**: `page.getByTestId()` (requires `data-testid` in HTML)
4. Avoid: CSS selectors and XPath unless absolutely necessary

### Assertions
Always use Playwright's built-in expectations:
- `expect(page).toHaveTitle()` - Page title checks
- `expect(element).toBeVisible()` - Visibility assertions
- Other matchers: `.toHaveURL()`, `.toContainText()`, `.toBeDisabled()`, etc.

## Project-Specific Notes

- **baseURL commented**: Currently disabled in config; uncomment if testing against a local dev server
- **webServer commented**: Dev server auto-start is disabled; enable for local app testing
- **No environment config**: `.env` loading is commented out; uncomment if secrets/config files needed
- **Module type**: `"type": "commonjs"` in package.json - use `require()` or modern `import` (Playwright handles both)
- **No npm scripts**: Custom build/test scripts are not defined - use `npx playwright` commands directly

## Common Development Tasks

### Adding a New Test
1. Create file in `e2e/` directory: `e2e/feature-name.spec.js`
2. Copy structure from `e2e/example.spec.js`
3. Use semantic locators and Playwright expectations
4. Run with `npx playwright test --ui` to debug

### Debugging Failed Tests
1. Check `playwright-report/` after test run
2. Traces are auto-captured on first retry (`trace: 'on-first-retry'`)
3. Run with `--debug` flag for step-by-step inspection
4. Use `--headed` to see browser actions in real time

### CI/CD Integration
When `CI=true` environment variable is set:
- Tests run sequentially (workers: 1)
- Tests retry twice on failure
- `test.only()` will fail the build (prevents accidental skipping)
