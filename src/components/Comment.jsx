import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends Component{
    state={
      comment:''
    };

    addComment=()=>{
        this.setState({
            comment:ReactDOM.findDOMNode(this.refs.comment).value
        });
        ReactDOM.findDOMNode(this.refs.comment).value='';
    };

    render() {
        return (
            <div className='comment'>
                <input className='add__text' type='text' defaultValue='' ref='comment' placeholder='Ваш коментар'/>
                <button className='add__btn bt' onClick={this.addComment}>Опоблікувати</button>
                <p>{this.state.comment}</p>
            </div>
        );
    }
}