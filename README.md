# Playwright POC
This project uses [Playwright](https://playwright.dev/) for end-to-end testing of web applications. Playwright provides tools to automate and interact with web applications to ensure their reliability and functionality. It contains just a couple of example for POC using page object model

## Project Structure

- `tests/`: Contains all test files.
- `pages/`: Contains page object models.
- `test-results/`: Contains html report of tests execututions.
- `playwright.config.ts`: Playwright configuration file.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/JAndresLM/playwright-poc.git
    cd playwright-poc
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Install Playwright browsers:**
    Playwright requires specific versions of browsers to be installed.
    ```bash
    npx playwright install
    ```

## Running Tests

- **Run All Tests**: Run all tests in the project.
    ```bash
    npx playwright test
    ```
    You can also make use of scripts in __package.json__ file
    ```bash
    npm test
    npm run test:ui
    npm run test:api
    ```

- **Run Specific File**: Run tests in a specific file.
    ```bash
    npx playwright test tests/example.test.ts
    ```

- **Headed Mode**: Run tests with a visible browser.
    ```bash
    npx playwright test --headed
    ```

- **Debug Mode**: Run tests in debug mode for easier troubleshooting.
    ```bash
    npx playwright test --debug
    ```

- **View Test Reports**: Playwright generates an HTML report after tests run.
    ```bash
    npx playwright show-report
    ```

## Configuration
The main configuration file is __playwright.config.ts__, where you can adjust settings like:

- Default timeout
- Retries
- Browser options