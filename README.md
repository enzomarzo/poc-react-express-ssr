# React-Express AEM Integration POC

This project is a proof of concept for integrating React with an Express server and Adobe Experience Manager (AEM).

## Prerequisites

To run this application, ensure you have the following:

- **AEM Instance Running Locally**: AEM should be running on port 4502.
- **.npmrc Configuration**: You must have an `.npmrc` file configured to access the Merkle design foundation package

### Example of .npmrc file

```plaintext
@arrow-dxp:registry=https://pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/registry/
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/registry/:username=arwdevops
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/registry/:_password=${TOKEN}
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/registry/:email={email}
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/:username=arwdevops
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/:_password=${TOKEN}
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/:email={email}
//pkgs.dev.azure.com/arwdevops/digital/_packaging/npm-feed/npm/:always-auth=true
editor=code
```

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
