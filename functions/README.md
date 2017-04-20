Firebase Cloud Functions package
===========

This module holds Cloud Functions that are used for the project.

# How to build

Install NPM dependencies:
```bash
npm install
```

# How to test locally

Use `function` - cloud functions emulator from Google:
```bash
npm run functions:start
npm run functions:deploy
npm run functions:call
```

Be aware that we're using `functions.config()` in our Cloud Functions, so we have to place `config.json` in
 functions folder in order to be able to start local emulator.
 
Currently following `config.json` file should be OK:
```json
{
  "sendgrid": {
    "key": "<SENDGRID-TOKEN>"
  },
  "firebase": {
    "databaseURL": "https://<YOUR-PROJECT-ID>.firebaseio.com",
    "storageBucket": "<YOUR-PROJECT-ID>.appspot.com",
    "apiKey": "<YOUR-PROJECT-API-KEY>",
    "authDomain": "<YOUR-PROJECT-ID>.firebaseapp.com"
  }
}
```

## Functions emulator config

Functions emulator uses GCloud tools configuration, so be sure to change your Gcloud project to the appropriate one.

Additionally, check Functions emulator documentation [here][function-emulator-wiki].

[function-emulator-wiki]: https://github.com/GoogleCloudPlatform/cloud-functions-emulator/wiki