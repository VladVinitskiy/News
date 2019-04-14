import {createStore,applyMiddleware} from 'redux'
import todoApp from '../reducers/index'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(todoApp,composeWithDevTools(applyMiddleware(thunk)));

export default store;