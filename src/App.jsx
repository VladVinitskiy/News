import React, {Fragment} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import BaseContainer from './containers/BaseContainer'
import SpinnerContainer from './containers/SpinnerContainer'

const App = () => {
    return (
        <Switch>
            <Route path="/" render={() => {
                return (
                    <Fragment>
                        <BaseContainer/>
                        <SpinnerContainer/>
                    </Fragment>
                )
            }}/>
        </Switch>
    )
};


export default withRouter(App);