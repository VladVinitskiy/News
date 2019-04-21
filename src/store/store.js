import {createStore, applyMiddleware} from 'redux'
import NewsApp from '../reducers/index'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(NewsApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;