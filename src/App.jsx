import React, {Component,Fragment} from 'react';
import {Provider} from 'react-redux';
import Main from './components/Main';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import NavBar from './components/NavBar';
import store from './store/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import { createStore }  from 'redux'
// import todoApp from './Diff/reducers/index'

// const store = createStore(todoApp);

export default class App extends Component {

    state = {
        isAuthorize: false,
        userName: ''
    };

    componentWillMount() {
        if (localStorage.getItem('remembered')!==null){
            this.setState({
                isAuthorize:true,
                userName:JSON.parse(localStorage.getItem('remembered'))
            })
        }
    }

    changeAuthorize = (authorize, name) => {
        this.setState({isAuthorize: authorize});
        this.setState({userName: name})
    };

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Route render={({history}) => (
                        <Switch history={history}>
                            <Route
                                exact path='/'
                                render={() =>
                                    <Fragment>
                                        <NavBar
                                            isAuthorize={this.state.isAuthorize}
                                            userName={this.state.userName}
                                            changeAuthorize={this.changeAuthorize}
                                        />
                                        <Main
                                            isAuthorize={this.state.isAuthorize}
                                            changeAuthorize={this.changeAuthorize}
                                            userName={this.state.userName}
                                            history={history}
                                        />
                                    </Fragment>}
                            />
                            <Route path='/registration' component={Registration}/>
                            <Route
                                path='/authorization'
                                render={() =>
                                    <Authorization
                                        changeAuthorize={this.changeAuthorize}
                                        history={history}
                                    />}
                            />
                        </Switch>
                    )}/>
                </Provider>
            </BrowserRouter>
        )
    }
}