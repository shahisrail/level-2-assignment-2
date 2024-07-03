# Product Management Backend Application

## Description

This project is a backend application built using Node.js, Express, and TypeScript. It utilizes Mongoose for MongoDB interactions, CORS for cross-origin resource sharing, and Zod for schema validation. This README file will guide you on how to set up and run this application locally.

## Requirements

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (either local or remote instance)

## Installation

1. **Clone the repository:**
 git clone <repository-url>
   ```bash
   cd level-2-assignment-2
   ```

2. **Install dependencies:**
    ```bash
    npm install
     ```
3. **Create a .env file in the root of your project:**
    ```bash
    touch .env
     ```
4. **Add the necessary environment variables to the .env file. For example:**
    ```bash
   DB_URL=mongodb://localhost:27017/mydatabase
   PORT=5000
     ```
## Running the Application

 5. **In Development Mode :**
    ```bash
    npm run start:dev
    ```
