import React, {Component, Fragment} from 'react';
import MainContent from '../containers/MainContent';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import AddUser from '../containers/AddUser';
import ValidateUser from '../containers/ValidateUser';
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
                                    <Header/>
                                    <MainContent history={history}/>
                                    <Footer/>
                                </Fragment>}
                        />
                        <Route path='/registration' render={() =>
                            <Fragment>
                                <Header/>
                                <AddUser history={history}/>
                            </Fragment>}
                        />
                        <Route path='/authorization' render={() =>
                            <Fragment>
                                <Header/>
                                <ValidateUser history={history}/>
                            </Fragment>}
                        />
                    </Switch>
                )}/>
            </BrowserRouter>
        )
    }
}