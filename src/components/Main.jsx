import React,{Component} from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../App.css';

export default class Main extends Component {
    state={
        newsLength:0
    };

    updateData = value => this.setState({ newsLength: value });

    render(){
        return(
            <div className='wrapper'>
                <AddTodo isAuthorize={this.props.isAuthorize} />
                <div className='wrapper_header'>
                    <h1 className='header'>News</h1>
                    <Filters/>
                </div>
                <VisibleTodoList
                    updateData={this.updateData}
                    isAuthorize={this.props.isAuthorize}
                    userName={this.props.userName}
                />
                <div className='footer'>
                    {this.state.newsLength===0 ?
                        <span className='amount_of_news'>{`News are absent`}</span> :
                        <span className='amount_of_news'>{`Amount of news ${this.state.newsLength}`}</span>}
                </div>
            </div>
        )
    }
}