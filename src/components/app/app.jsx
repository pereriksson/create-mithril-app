"use strict";

import m from 'mithril';
import "./app.css";

let App = function(vnode) {
    return {
        view: () => (
            <main>
                <div class="logo"></div>
                {vnode.children}
            </main>
        )
    };
};

export default App;