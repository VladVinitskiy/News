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
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: true, news: data})
        }, 1000)
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
        this.setState({news: nextNews})
    };

    render() {
        const {news, isLoading} = this.state;

        return (
            <div>
                <CreateNews onAddNews={this.handleAddNews}/>
                {isLoading ? <News data={news}/> : <p>One minute please...</p>}
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