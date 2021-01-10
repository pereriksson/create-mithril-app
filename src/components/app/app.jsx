import m from 'mithril';
import "./app.css";

let App = function(vnode) {
    return {
        view: (vnode) => (
            <main>
                {vnode.children}
            </main>
        )
    };
};

export default App;
