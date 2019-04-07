import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick, onAddComment, onAddLike, showMore, isAuthorize, userName}) => {
    return (
        <ul
            className='list-group mr-lg-5 ml-lg-5 mr-md-2
            ml-md-2 ml-sm-1 mr-sm-1 pt-lg-3 pt-md-3 pt-sm-2
            pb-lg-3 pb-md-3 pb-sm-2 p_mode'
            style={{paddingLeft: 0}}>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    {...todo}
                    onClick={() => onTodoClick(index)}
                    onAddComment={onAddComment}
                    onAddLike={onAddLike}
                    showMore={showMore}
                    isAuthorize={isAuthorize}
                    userName={userName}
                />
            ))}
        </ul>
    )
};

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            completed: PropTypes.bool,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
