# React-Express AEM Integration POC

This project is a proof of concept for integrating React with an Express server and Adobe Experience Manager (AEM).

## Prerequisites

To run this application, ensure you have the following:

- **AEM Instance Running Locally**: AEM should be running on port 4502.
- **.npmrc Configuration**: You must have an `.npmrc` file configured to access the Merkle design foundation package. You can check / copy the `.npmrc.example` to the `.npmrc`. Just make sure you have the token on your shell

## Installation

Clone the repository:

```sh
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```sh
npm install
```

Ensure your `.npmrc` file is correctly set up.

## Running the Application

Start the Express server to serve the React application:

```sh
npm start
```

## How It Works

- The Express.js server fetches content from AEM.
- It replaces a target `<div>` with the React application.
- The application is server-side rendered (SSR) and sent to the client.
- React then hydrates the application, enabling client-side interactivity.
