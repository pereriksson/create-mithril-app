# Create Mithril App

This repo provides a quick way to start writing your new web app based on Mithril.

## Usage

First let's install all dependencies needed for this repo:

```
npm install
npm start
```

## Purpose

The purpose of this repo is to provide a fully working minimal setup to start developing with the web framework Mithril. This repo provides with the following:

* webpack-plugin serve (because webpack-dev-server is bad)
* webpack configured with babel
* JSX
* url-loader plugin to bundle static files
* style-loader and css-loader to bundle css files
* routing, an App layout component and home component to get started

Hopefully this repo can lower the barrier for developers to get started with Mithril.

## Configuration

The created project comes with two webpack files, one for development, one for build. They can be configured further to suit your needs. *Please be aware we cannot support all these different configurations*

## Build

`npm run build` would create the deployable files in the build directory.

## Server-side API

`create-mithril-app` is designed for developing client side applications that access APIs remotely. It can easily integrate with a backend server too. Please see [Server setup](https://github.com/highmountaintea/create-mithril-app/blob/master/server-setup.md) for the sample API server that comes with this app.

## Special Thanks

Thank you to [the mithril.js community](https://mithril.js.org/simple-application.html) for building a great web framework. To `create-react-app` for the inspiration to thie repo.