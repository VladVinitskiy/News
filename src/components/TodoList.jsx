import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
    componentWillMount() {this.props.updateData(this.props.todos.length);}

    componentDidUpdate() {this.props.updateData(this.props.todos.length);}

    render() {
        const {todos, onTodoClick} = this.props;
        return (
            <div className='main'>
                <ul style={{paddingLeft: 0}}>
                    {todos.map((todo, index) => (
                        <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
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
