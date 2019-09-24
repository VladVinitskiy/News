import React, {Fragment} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import BaseContainer from './containers/BaseContainer'
import SpinnerContainer from './containers/SpinnerContainer'
import ModalArticleContainer from './containers/ModalArticleContainer'

const App = () => {
    return (
        <Switch>
            <Route path="/" render={() => {
                return (
                    <Fragment>
                        <BaseContainer/>
                        <ModalArticleContainer/>
                        <SpinnerContainer/>
                    </Fragment>
                )
            }}/>
        </Switch>
    )
};


export default withRouter(App);