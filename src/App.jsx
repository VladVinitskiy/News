import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './containers/MainApp'
import store from './store/store';

const App = ()=>(
    <Provider store={store}>
        <MainApp/>
    </Provider>
);

export default App;