import React, {Fragment} from 'react';
import Filters from './Filters';
import News from '../containers/AddNewsContainer';
import NewsContainer from '../containers/NewsContainer';

const Main = ({isAuthorize, newsLength, currentUser}) => {
    return (
        <Fragment>
            <div className='container-fluid wrapper_header'>
                <News
                    isAuthorize={isAuthorize}
                    newsLength={newsLength}
                    userName={currentUser.name}
                />
                <Filters/>
            </div>
            <div className='container-fluid bg-dark'>
                <NewsContainer
                    isAuthorize={isAuthorize}
                    userName={currentUser.name}
                />
            </div>
        </Fragment>
    )
};

export default Main;