import React,{Fragment} from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Main = ({isAuthorize,newsLength,validateUser}) =>{
    return (
        <Fragment>
            <div className='container-fluid wrapper_header'>
                <AddTodo
                    isAuthorize={isAuthorize}
                    newsLength={newsLength}
                    userName={validateUser.name}
                />
                <Filters/>
            </div>
            <div className='container-fluid bg-dark'>
                <VisibleTodoList
                    isAuthorize={isAuthorize}
                    userName={validateUser.name}
                />
            </div>
        </Fragment>
    )
};

export default Main;