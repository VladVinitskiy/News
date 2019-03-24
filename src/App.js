import React,{Component} from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css'

export default class App extends Component {
    state={newsLength:0};

    updateData = value => this.setState({ newsLength: value });

    render(){
        return(
            <div className='wrapper'>
                <AddTodo />
                <Footer/>
                <h1 className='header'>News</h1>
                <VisibleTodoList updateData={this.updateData} />
                {this.state.newsLength===0 ?
                    <span className='amount_of_news'>{`Немає новин`}</span> :
                    <span className='amount_of_news'>{`Кількість новин ${this.state.newsLength}`}</span>}
            </div>
        )
    }
}