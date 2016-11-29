[`node-lyft`](http://github.com/andrewmartin/node-lyft) + Express Starter
=========

![Demo](https://media.giphy.com/media/3o7TKvPUPfkAQHhbOg/source.gif?raw=true)

This is a WIP sample project written in node for the [`node-lyft`](http://github.com/andrewmartin/node-lyft) wrapper, which facilitates calls to the [Lyft](https://www.lyft.com/developers) API. It shows a simple way to integrate the wrapper with a basic Express app.

Thanks to Jordan Patton for [his version](https://github.com/jordanpatton/lyft-node-starter-kit) of this project, which was used as a base skeleton to start from.

Installation
------------

First, you need to register your app in the [Lyft Developer Portal](https://www.lyft.com/developers), and take note of the `CLIENT_ID` and `CLIENT_SECRET` provided.

Next, copy `.env.sample` to `.env` and place in the root of your project, updating it with your information. Alternatively, add environment variables to your startup script. This project uses [.env](https://www.npmjs.com/package/dotenv) to manage these variables, but you can use the command line as well if you prefer.

#### ./.env

```sh
CONFIG_LYFT_API_URI=https://api.lyft.com
CONFIG_LYFT_WWW_URI=https://www.lyft.com
CONFIG_LYFT_CLIENT_ID=YOUR_ID
CONFIG_LYFT_CLIENT_SECRET=YOUR_SECRET
CONFIG_PORT=8080
CONFIG_SESSION_SECRET=secret
CONFIG_USE_SANDBOX=true
CONFIG_GOOGLE_API_KEY=yourkey
```

After registering your application, install dependencies (make sure you have [Bower](https://bower.io) installed):

```sh
$ npm i
$ bower i
```

### Startup
-----

```sh
$ webpack && npm start
```

### Development

This project uses `webpack` and is built using `React` and `Redux`. In order to develop:

1. Install all dependencies using `npm i` and `bower i`
2. In one Terminal session, run `npm start`
3. In another, run `webpack --colors --watch --debug`

#### Frontend

The front-end of this app is built using common React and Redux patterns, with a simple root reducer. At this time, the reducer is fairly simple, and was integrated largely to manage the `nearby-drivers` array of pins API response.

The front-end application lives in the `scripts/` directory, with most components found under `scripts/components`. The main entry point for webpack is at `scripts/main.jsx`.

#### Node / Express

The backend of this application is a simple `node/express` app, configured at `./app.js`. However, the bulk of the interesting content is found in the `./controllers` directory.

There are some simple endpoints that serve to demonstrate how to use the `node-lyft` wrapper. The main controller, found at `./controllers/api/lyft/index.js` should serve to identify how the responses are handled on the frontend app. Presently, only `post` requests are handled in the express app.

##### A note on `esLint`

This project has an `.eslintrc.js` in the root that uses `airbnb`'s recommended set of rules. Their rules are often a little excessive, so the plan is to eventually dial back to a little less stringent set of rules. For now, linting will likely fail; so just use your best judgment.
