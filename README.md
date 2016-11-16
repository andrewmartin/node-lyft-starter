[`node-lyft`](http://github.com/andrewmartin/node-lyft) + Express Starter
=========

This is a WIP sample project written in node for the [`node-lyft`](http://github.com/andrewmartin/node-lyft) wrapper, which facilitates calls to the [Lyft](https://www.lyft.com/developers) API. It shows a simple way to integrate the wrapper with a basic Express app.

Thanks to Jordan Patton for [his version](https://github.com/jordanpatton/lyft-node-starter-kit) of this project, which was used as a base skeleton to start from.

Installation
------------

First, you need to register your app in the [Lyft Developer Portal](https://www.lyft.com/developers), and take note of the `CLIENT_ID` and `CLIENT_SECRET` provided.

Next, copy `.env.sample` to `.env` and place in the root of your project, updating it with your information. Alternatively, add environment variables to your startup script. This project uses [.env](https://www.npmjs.com/package/dotenv) to manage these variables.

#### ./.env

```sh
CONFIG_LYFT_API_URI=https://api.lyft.com
CONFIG_LYFT_WWW_URI=https://www.lyft.com
CONFIG_LYFT_CLIENT_ID=YOUR_ID
CONFIG_LYFT_CLIENT_SECRET=YOUR_SECRET
CONFIG_PORT=8080
CONFIG_SESSION_SECRET=secret
CONFIG_USE_SANDBOX=true
```

After registering your application, install dependencies (make sure you have [Bower](https://bower.io) installed):

```sh
$ npm i
$ bower i
```

### Startup
-----

```sh
$ npm start
```
