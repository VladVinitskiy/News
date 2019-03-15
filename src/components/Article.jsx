import React,{Component} from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types';


export default class Article extends Component{
    state={
        visible:false,
        counter:0
    };

    handleClick=()=>{this.setState({visible:!this.state.visible})};

    handleCount = ()=>{this.setState({counter: this.state.counter+1})};

    render() {
        const {index,author,text,bigText} = this.props;

        return(
            <li className='article' key={index}>
                <h3 className='add__author'>{author}</h3>
                {this.state.visible===true ? <p className='add__text'>{bigText}</p>:<p className='add__text'>{text}</p>}
                <button className='add__btn' onClick={this.handleClick}>{this.state.visible?`Менше`:'Більше'}</button>
                <div className='miniWrap'>
                    <Comment/>
                    <button className='count' onClick={this.handleCount}>{this.state.counter===0?'+':this.state.counter}</button>
                </div>
            </li>
        )
    }
}

Article.propTypes={
    author:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    bigText:PropTypes.string.isRequired,
};

