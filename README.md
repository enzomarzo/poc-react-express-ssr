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
