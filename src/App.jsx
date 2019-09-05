import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom'

import BaseContainer from './containers/BaseContainer'
import SpinnerContainer from './containers/SpinnerContainer'
import StartPageContainer from './containers/StartPageContainer'



const App = ({isLoggedIn}) => {
    return (
        <Switch>
            <Route path="/" render={() => {
                return (
                    <Fragment>
                        {isLoggedIn ? <BaseContainer/> : <StartPageContainer/>}
                        <SpinnerContainer/>
                    </Fragment>
                )
            }}/>
        </Switch>
    )
};


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.filters.isLoggedIn
    };
};

export default withRouter(connect(mapStateToProps)(App));