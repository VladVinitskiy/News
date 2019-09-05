import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


class StartPage extends Component{
    render() {
        const {login, addUser} = this.props;

        return (
            <Switch>
                <Route path='/login'  render={() => <LogIn login={login}/>}/>
                <Route path='/signup'  render={() => <SignUp addUser={addUser}/>}/>
                <Redirect to="/login"/>
            </Switch>
        )
    }
}

export default StartPage;

