import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
    componentWillMount() {this.props.updateData(this.props.todos.length);}

    componentDidUpdate() {this.props.updateData(this.props.todos.length);}

    render() {
        const {todos, onTodoClick,isAuthorize,userName} = this.props;
        return (
            <div className={isAuthorize===false?'main_off':'main_on'}>
                <ul style={{paddingLeft: 0}}>
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            {...todo}
                            onClick={() => onTodoClick(index)}
                            isAuthorize={isAuthorize}
                            userName={userName}
                        />
                    ))}
                </ul>
            </div>

        )
    }
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            completed: PropTypes.bool,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
