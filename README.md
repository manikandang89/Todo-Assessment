
## Overview

Welcome to the **Todo List App** project! This repository accompanies a comprehensive To manage tasks, toggle a checkbox to mark them as completed or active, and use a delete button to remove them

## Table of Contents


- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)


## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/manikandang89/Todo-Assessment.git
   cd Todo-Assessment
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

## Project Structure

```
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   └── TodoList.test.jsx
│   │   
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vitest.config.js
├── vitest.setup.js
├── package.json
├── README.md
└── ...other config files
```

- **components/**: Contains React components and their corresponding test files.
- **jest.config.ts**: Configuration file for Jest.
- **jest.setup.ts**: Setup file to configure Jest with Jest-DOM matchers.

## Running the Application

To start the development server:

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the running application.

## Running Tests

This project uses **JEST** as the test runner. To execute the tests:

Using npm:

```bash
npm test
```

Or using Yarn:

```bash
yarn test
```

JEST will run all test files matching the pattern `*.test.tsx` and display the results in the console.
