import React from 'react'
import Masonry from 'react-masonry-css'
import Article from './Article'

import "../styles/Article.sass"

const NewsBoard = (props) => {
    return (
        <Masonry
            breakpointCols={{default: 3, 1460: 2, 1040: 1}}
            className="my-masonry-grid bg-dark"
            columnClassName="my-masonry-grid_column">
            {props.news.length > 0 && props.news.map((article, index) => (
                <Article
                    key={index}
                    {...props}
                    article={article}
                />))}
        </Masonry>
    )
};

export default NewsBoard;
