"use strict";

import m from 'mithril';
import "./app.css";

let App = function(vnode) {
    return {
        view: (vnode) => (
            <main>
                <div class="logo"></div>
                {vnode.children}
            </main>
        )
    };
};

export default App;