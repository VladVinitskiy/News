import React,{Fragment} from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const MainComponent = ({isLoggedIn,newsLength,validateUser, getNews}) =>{
    return (
        <Fragment>
            <div className='container-fluid wrapper_header'>
                <AddTodo
                    isLoggedIn={isLoggedIn}
                    newsLength={newsLength}
                    userName={validateUser.name}
                />
                <Filters getNews={getNews}/>
            </div>
            <div className='container-fluid bg-dark'>
                <VisibleTodoList
                    isLoggedIn={isLoggedIn}
                    userName={validateUser.name}
                />
            </div>
        </Fragment>
    )
};

export default MainComponent;