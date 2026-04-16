# 🧪 Integration Test Practice

## 📌 Overview
This repository contains a collection of integration tests written using Jest and React Testing Library.  
The goal is to practice real‑world testing scenarios such as API calls, component interactions, and asynchronous behaviour.

## 🎯 Purpose
- Improve integration testing skills  
- Understand how UI components interact with API layers  
- Practice mocking, spying, and async behaviour  
- Build confidence in writing maintainable tests  

## 🛠️ Technologies Used
- Jest  
- React Testing Library  
- Custom mocks (`_mocks_` folder)  
- Node.js  
- JavaScript (ES Modules)

## 📂 Project Structure

Integration-Test-Practice/
├── mocks/
├── coverage/
├── src/
├── tests/
│   ├── UserProfile.test.js
│   ├── APICalls.test.js
│   └── ...
├── jest.config.mjs
├── jest.setup.js
└── package.json

## 🧩 Included Test Scenarios

### ✔ User Profile Integration Test
- Renders the user profile component  
- Mocks API calls  
- Verifies UI updates after async responses  

### ✔ API Calls Integration Test
- Tests API modules in `src/APICalls/`  
- Ensures correct request/response handling  
- Validates error behaviour  

### ✔ Component Interaction Tests
- Confirms UI updates based on API results  
- Checks DOM changes triggered by user actions  

### ✔ Mocking & Edge Case Handling
- Uses custom mocks  
- Tests behaviour with unexpected API data  

## ▶️ How to Run Tests
npm install

npm test

To view coverage:
npm test -- --coverage

## 📘 Notes
- These tests are intentionally short and focused, designed to help me practice integration testing as a starting point.
- Easy to read and extend  
- Suitable for job applications as a testing portfolio  

## 👤 Author
Mariko Mands  
GitHub: https://github.com/marikomands
