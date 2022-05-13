# [Ergo](https://ergoplatform.org/) JS Template - Entry Point to Ergo dApp Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It contains [ergo-ts](https://github.com/coinbarn/ergo-ts) and [ergo-lib](https://github.com/ergoplatform/sigma-rust) libraries as dependencies
and some examples to present how to use these libraries.

## Goal
The goal of this template is to bootstrap JS dApp development for Ergo Blockchain.
Ergo libraries, WASM support and several examples are already available in this template.
These simple examples should help devs to get on board faster and start developing their ideas right away.

Since the template is structurally identical to an empty React project created by CRA,
devs can simply and without any ergo-related barriers clone the project and build on top of it.

## Examples
Available examples include:
* Interacting with the explorer
* Encoding different data types
* Decoding fields (registers) of tokens

These examples are simple intentionally to be newcomer-friendly. These should help you
to understand how to use ergo libraries and start developing your dApp.

## Deploy Your dApp
To facilitate deploying your React app, docker file is already available for this template.

Just build your docker image locally using:
```bash
docker build -t mydapp
```
Or configure [Dockerhub](https://hub.docker.com/) to build the image automatically for you when you push to a specific branch.

Then you can run/deploy your dApp easily using:
```bash
docker run -p 80:80 mydapp
```

## Available Scripts

In the project directory, you can run:

### `npm install`
then
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
