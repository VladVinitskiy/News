import React,{Fragment} from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import NewsBoardConatiner from '../containers/NewsBoardConatiner';


const MainComponent = ({isLoggedIn,newsLength,validateUser, getNews, newsSource}) =>{
    return (
        <Fragment>
            <div className='container-fluid wrapper_header'>
                <AddTodo
                    isLoggedIn={isLoggedIn}
                    newsLength={newsLength}
                    userName={validateUser.name}
                />
                <Filters getNews={getNews} newsSource={newsSource}/>
            </div>
            <NewsBoardConatiner isLoggedIn={isLoggedIn} userName={validateUser.name}/>
        </Fragment>
    )
};

export default MainComponent;