import React, {Fragment, Component} from 'react';

import MainContainer from '../containers/MainContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';


export default class Dashboard extends Component{
    componentDidMount() {
        this.props.getNews();
    }

    render(){
        return (
            <Fragment>
                <MainContainer/>
                <FooterContainer/>
            </Fragment>
        )
    }
}

