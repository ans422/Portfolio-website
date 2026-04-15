# Unified API Validator 🚀

A Node.js-based API testing tool for validating REST APIs with security checks.

## Features
- ✅ Status code validation
- 🧠 JSON schema validation (AJV)
- 🔐 Security header checks
- 🔑 JWT validation

## Tech Stack
- Node.js
- Axios
- AJV (JSON Schema Validator)
- JSON Web Token (jsonwebtoken)
- Chalk (colored console output)

## Project Structure
```
unified-api-validator/
├── src/
│   ├── config/
│   │   └── config.js
│   ├── validators/
│   │   ├── responseValidator.js
│   │   ├── schemaValidator.js
│   │   └── securityValidator.js
│   ├── utils/
│   │   └── requestHelper.js
│   ├── tests/
│   │   └── apiTests.js
│   └── app.js
├── reports/
├── package.json
└── README.md
```

## Setup & Run

```bash
npm install
npm test
```

## How It Works

1. **requestHelper.js** — Wraps Axios to make HTTP requests cleanly.
2. **responseValidator.js** — Checks the HTTP status code matches expectation.
3. **schemaValidator.js** — Validates the JSON response body against an AJV schema.
4. **securityValidator.js** — Checks for OWASP-recommended security headers and JWT integrity.
5. **apiTests.js** — Orchestrates all validators against a target API endpoint.
