import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

export default class Todo extends Component {
    state = {
        visible: false,
        counter: 0,
        comment: ''
    };

    handleClick = () => this.setState({visible: !this.state.visible});

    handleCount = () => this.setState({counter: this.state.counter + 1});

    addComment = () => {
        this.setState({
            comment: `${this.props.userName}: ${ReactDOM.findDOMNode(this.refs.comment).value}`
        });
        ReactDOM.findDOMNode(this.refs.comment).value = '';
    };

    render() {
        const {onClick, status, author, text, bigText,isAuthorize} = this.props;

        return (
            <li
                className={status ? 'article readen' : 'article'}
            >
                <label className="add__check">
                    <span>Readen</span>
                    <input type="checkbox"
                           onChange={onClick}
                           checked={status}
                    />
                </label>
                <h3 className='author'>{author}</h3>
                {this.state.visible === true ? <p className='text'>{bigText}</p> : <p className='text'>{text}</p>}
                <input className='add__input'
                       type='text'
                       defaultValue=''
                       ref='comment'
                       placeholder='Your comment'/>
                <div className='miniWrap'>
                    <button
                        className='bt dif'
                        onClick={this.handleClick}
                    >
                        {this.state.visible ? `Less` : 'More'}
                    </button>
                    <button
                        className='bt'
                        onClick={this.addComment}
                        disabled={!isAuthorize}
                    >
                        Public
                    </button>
                    <button
                        className='bt count'
                        onClick={this.handleCount}
                        disabled={!isAuthorize}
                    >
                        +{this.state.counter === 0 ? '' : this.state.counter} Like
                    </button>
                </div>
                <p className='comment'>{this.state.comment}</p>
            </li>
        )
    }
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired
};
