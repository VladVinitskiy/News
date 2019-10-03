import React,{Fragment} from 'react';
import Filters from './Filters';
import AddArticleContainer from '../containers/AddArticleContainer';
import NewsBoardConatiner from '../containers/NewsBoardConatiner';

import "../styles/Filters.sass"

const MainComponent = ({isLoggedIn, getNews, newsSource, sources}) =>{
    return (
        <Fragment>
            <div className='container-fluid wrapper_header'>
                <AddArticleContainer isLoggedIn={isLoggedIn}/>
                <Filters getNews={getNews} newsSource={newsSource} sources={sources}/>
            </div>
            <NewsBoardConatiner isLoggedIn={isLoggedIn}/>
        </Fragment>
    )
};

export default MainComponent;