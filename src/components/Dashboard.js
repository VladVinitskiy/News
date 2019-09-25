import React, {Fragment, Component} from 'react';

import MainContainer from '../containers/MainContainer';
import FooterContainer from '../containers/FooterContainer';


export default class Dashboard extends Component{
    componentDidMount() {
        const {news, getNews} = this.props;
        news.length ===0 && getNews();
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

