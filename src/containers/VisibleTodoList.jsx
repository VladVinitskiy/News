import {connect} from 'react-redux';
import {toggleTodo} from '../action/filters';
import {addComment} from '../action/addComment';
import {addLike} from '../action/addLike';
import {showMore} from '../action/filters';
import TodoList from '../components/TodoList';
import getVisibleTodos from '../reducers/visibilityFilter/getVisibleTodos'

const mapStateToProps = state => {
    return {
        news: getVisibleTodos(state.news, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        onAddComment: (index,user,comment) => {
            dispatch(addComment(index,user,comment))
        },
        onAddLike:(index,like) => {
            dispatch(addLike(index,like))
        },
        showMore:(index,visible) => {
            dispatch(showMore(index,visible))
        },
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
