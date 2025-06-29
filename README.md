# SauceDemo Playwright Tests

Automated end-to-end UI and API tests for the [SauceDemo](https://www.saucedemo.com/) web application using Playwright and TypeScript.

---

## Features

- ✅ UI tests for login (valid, locked out, and invalid users)
- ✅ Page Object Model for maintainable test code
- ✅ Assertions for redirects and error messages
- ✅ Ready to extend with API tests
- ✅ Easy configuration and test data management

---

## Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/saucedemo-playwright-tests.git
   cd saucedemo-playwright-tests
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run all tests**
   ```sh
   npx playwright test
   ```

---

## Project Structure

```
.
├── pages/         # Page Objects (e.g., LoginPage)
├── tests/         # Playwright test files
├── data/          # Test data (usernames, passwords)
├── helpers/       # Configs & helpers
├── node_modules/  # Dependencies
├── test-results/  # Playwright test results
├── .gitignore
└── README.md
```

---

## Technologies Used

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js

---

## How to Contribute

- Fork this repository
- Create a new branch for your feature or fix
- Commit your changes
- Open a Pull Request

---
