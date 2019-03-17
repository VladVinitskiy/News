import React, {Component} from 'react';
import News from './components/News'
import InfoAboutNews from './components/InfoAboutNews'
import CreateNews from './components/CreateNews'
import './App.css'
import data from './newsData';

export default class MainApp extends Component {
    state = {
        news: null,
        isLoading: false,
        counter: 0
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: true,
                news: localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : data
            })
        }, 1000);
    }

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;

        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach((item, index) => {
                if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                    item.bigText = 'СПАМ'
                }
            });

            return {
                filteredNews: nextFilteredNews,
            }
        }
        return null
    }

    handleAddNews = data => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews});
        localStorage.setItem('data', JSON.stringify(nextNews))
    };


    render() {
        const {news, isLoading} = this.state;
        return (
            <div className='wrapper'>
                <CreateNews onAddNews={this.handleAddNews}/>
                <h1 className='header'>News</h1>
                {isLoading ? <News data={news}/> : <h2 className='load'>One minute please...</h2>}
                {isLoading && <InfoAboutNews length={this.state.news.length}/>}
            </div>
        );
    }


    //Code for instance requests from imagine server or Requests
    //__________________________________________________________
    // componentDidMount() {
    //     fetch('http://localhost:3000/data/newsData.json')
    //         .then(response => {return response.json()})
    //         .then(data => {
    //             setTimeout(() => {
    //                 this.setState({ isLoading: true, news: data })
    //             }, 1000)
    //         })
    // }
}