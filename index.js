"use strict";

import m from 'mithril';
import App from './src/components/app/app';
import Home from './src/components/home/home';

// Accept HMR replacements
if (module.hot) {
    module.hot.accept();
}

const root = document.querySelector('#root');

m.route(root,
    '/',
    {
        '/': {
            render: function () {
                return m(App, m(Home))
            }
        }
    }
)
