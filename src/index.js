import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware  from 'redux-promise-middleware';

import News from "./reducers/index"
import App from './App'

import "./styles/App.css"
import "./styles/Main.sass"
import 'react-datepicker/dist/react-datepicker.css';

const middlewares = [thunk, promiseMiddleware];
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(News, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);