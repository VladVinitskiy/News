import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"

import MainContainer from '../containers/MainContainer';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/Footer';

export default class Base extends Component {
    componentDidMount() {
        this.props.getNews();
        this.props.getCurrentSession();
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route path="/dashboard" component={MainContainer}/>
                    <Redirect to="/dashboard"/>
                </Switch>
                <Footer/>
            </Fragment>
        )
    }
}