import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from "./store"


//需要创建一个store，来存储当前的state，action等
//利用react-redux的Provider方法来提供类似于props的方法，只要把store传下去
//下面connect中就会接收到这个store
const store = createStore
window.store = store
console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
