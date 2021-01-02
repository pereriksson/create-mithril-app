# Create Mithril App

This repo provides a quick way to start writing your new web app based on Mithril.

## Usage

```
npm install
npm start
```

## Purpose

The purpose of this repo is to provide a fully working minimal setup to start developing a new app with the web framework Mithril. This repo provides the following:

* webpack-plugin serve - an alternative to webpack-dev-server
* webpack configured with babel - to automatically transpile your code
* JSX - to write beautiful components
* url-loader - plugin to bundle static files
* style-loader, css-loader - to bundle css files
* a Mithril setup with routing, an App layout component and a Home component to get started

Hopefully this repo can lower the barrier for new developers to get started with Mithril.

## JSX Event Listeners

While JSX events are usually named using camelCase, lowercase names should be used when JSX is used with Mithril.

```javascript
function MyComponent() {
    return {
        view: () =>
            m("main", [
                m("input", {
                    type: "button",
                    onclick: () => console.log('clicked'),
                    value: "Click me!"
                })
            ])
    }
}
```

Should be written as:

```jsx
function MyComponent() {
    return {
        view: () => (
            <main>
                <input type="button" onclick={() => console.log('clicked')} value="Click me!"/>
            </main>
        )
    }
}
```

## Thank You

Thank you to [the mithril.js community](https://mithril.js.org/simple-application.html) for building a great web framework. To `create-react-app` for the inspiration to this repo.
