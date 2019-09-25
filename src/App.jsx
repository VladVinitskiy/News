import React, {Fragment} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import BaseContainer from './containers/BaseContainer'
import SpinnerContainer from './containers/SpinnerContainer'
import ModalArticleContainer from './containers/ModalArticleContainer'
import ReduxToastr from 'react-redux-toastr'

const App = () => {
    return (
        <Switch>
            <Route path="/" render={() => {
                return (
                    <Fragment>
                        <BaseContainer/>
                        <ModalArticleContainer/>
                        <SpinnerContainer/>
                        <ReduxToastr
                            newestOnTop={false}
                            preventDuplicates
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            closeOnToastrClick/>
                    </Fragment>
                )
            }}/>
        </Switch>
    )
};


export default withRouter(App);