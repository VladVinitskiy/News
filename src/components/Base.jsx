import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ProfileContainer from "../containers/ProfileContainer";
import HeaderContainer from "../containers/HeaderContainer";

export default class Base extends Component{
    componentDidMount(){
        this.props.getCurrentSession()
    }

    render(){
        const {login, addUser, getNews, isLoggedIn} = this.props;

        return (
            <Fragment>
                <HeaderContainer/>
                <Switch>
                    <Route path="/dashboard" render={() => <Dashboard getNews={getNews}/>}/>
                    <Route path='/login' render={() => <LogIn login={login}/>}/>
                    <Route path='/signup' render={() => <SignUp addUser={addUser}/>}/>
                    {isLoggedIn && <Route path='/profile' component={ProfileContainer}/>}
                    <Redirect to="/dashboard"/>
                </Switch>
            </Fragment>
        )
    }
}