# Create Mithril App

This repo provides a quick way to start writing your new web app based on Mithril.

## Usage

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

## Special Thanks

Thank you to [the mithril.js community](https://mithril.js.org/simple-application.html) for building a great web framework. To `create-react-app` for the inspiration to thie repo.