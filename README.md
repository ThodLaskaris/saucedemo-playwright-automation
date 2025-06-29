# SauceDemo Playwright Tests

Automated end-to-end UI and API tests for the [SauceDemo](https://www.saucedemo.com/) web application using Playwright and TypeScript.

---

## Features

### UI Test Features

- **Login/Logout:** Automated tests for user authentication.
- **Error Handling:** Tests for locked out users and invalid credentials.
- **Redirect Validation:** Ensures successful login redirects to the inventory page.
- **Error Message Validation:** Checks for correct error messages on failed logins.
- **Page Object Model:** Clean and maintainable test code structure.
- **Cross-browser Testing:** Easily run tests on Chromium, Firefox, and WebKit.
- **Test Reporting:** Generates detailed test reports with Playwright.
- **Extensible:** Ready to add more flows (cart, checkout, etc.).

### API Test Features

- **API Calls:** Supports API testing by inspecting and calling backend endpoints.
- **Status & Response Validation:** Assert HTTP status codes and response bodies.
- **Separation of Concerns:** API and UI tests can be managed independently.

---

## Technologies Used

### Test Automation

- **Playwright:** End-to-end testing framework.
- **TypeScript:** Strongly typed JavaScript for scalable, maintainable code.
- **Node.js:** JavaScript runtime for running tests and scripts.

### Utilities

- **npm:** Package manager for dependencies.
- **VS Code:** Recommended editor for development.

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/saucedemo-playwright-automation.git
   cd saucedemo-playwright-tests
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run all tests:**
   ```sh
   npx playwright test
   ```

---

## Project Structure

```
.
├── pages/         # Page Objects (e.g., LoginPage)
├── tests/         # Playwright test files (UI & API)
├── data/          # Test data (usernames, passwords)
├── helpers/       # Configs & helpers
├── node_modules/  # Dependencies
├── test-results/  # Playwright test results
├── .gitignore
└── README.md
```

---

## How to Contribute

- Fork this repository
- Create a new branch for your feature or fix
- Commit your changes
- Open a Pull Request

---

## Notes

- SauceDemo does not provide a public API, but you can create API tests by inspecting network requests.
- The project is ready for further flows (cart, checkout, etc).
- All test code is written in TypeScript (`.ts`).

---

## License

MIT
