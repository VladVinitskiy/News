import React, {Component, Fragment} from 'react';
import MainContainer from '../containers/MainContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import AuthorizationContainer from '../containers/AuthorizationContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../App.css';

export default class App extends Component {
    componentDidMount() {
        this.props.getNews();
        this.props.getUsers();
    }

    render() {
        return (
            <BrowserRouter>
                <Route render={({history}) => (
                    <Switch history={history}>
                        <Route
                            exact path='/'
                            render={() =>
                                <Fragment>
                                    <HeaderContainer/>
                                    <MainContainer history={history}/>
                                    <FooterContainer/>
                                </Fragment>}
                        />
                        <Route path='/registration' render={() =>
                            <Fragment>
                                <HeaderContainer/>
                                <RegistrationContainer history={history}/>
                            </Fragment>}
                        />
                        <Route path='/authorization' render={() =>
                            <Fragment>
                                <HeaderContainer/>
                                <AuthorizationContainer history={history}/>
                            </Fragment>}
                        />
                    </Switch>
                )}/>
            </BrowserRouter>
        )
    }
}