import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onPostChange, subscribe} from './redux/state'
import {state} from "./redux/state";

export const rerenderEntrieTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} onPostChange={onPostChange} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntrieTree(state);

subscribe(rerenderEntrieTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
