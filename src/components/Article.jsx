import React, {Component} from 'react';
// import Comment from './Comment'
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";


export default class Article extends Component {
    state = {
        visible: false,
        counter: 0,
        comment: ''
    };

    handleClick = () => {
        this.setState({visible: !this.state.visible})
    };


    handleCount = () => {
        this.setState({counter: this.state.counter + 1})
    };

    addComment = () => {
        this.setState({
            comment: ReactDOM.findDOMNode(this.refs.comment).value
        });
        ReactDOM.findDOMNode(this.refs.comment).value = '';
    };

    render() {
        const {index, author, text, bigText} = this.props;

        return (
            <li className='article' key={index}>
                <h3 className='author'>{author}</h3>
                {this.state.visible === true ? <p className='text'>{bigText}</p> : <p className='text'>{text}</p>}
                <input className='add__input' type='text' defaultValue='' ref='comment' placeholder='Ваш коментар'/>
                <div className='miniWrap'>
                    <button className='bt dif'
                            onClick={this.handleClick}>{this.state.visible ? `Менше` : 'Більше'}</button>
                    <button className='bt' onClick={this.addComment}>Опоблікувати</button>
                    <button className='bt count'
                            onClick={this.handleCount}>+{this.state.counter === 0 ? '' : this.state.counter} Лукас
                    </button>
                </div>
                <p className='comment'>{this.state.comment}</p>
            </li>
        )
    }
}

Article.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
};

