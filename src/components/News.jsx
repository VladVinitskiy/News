import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class News extends Component {
    render() {
        return (
            <div className='main'>
                <ul style={{paddingLeft: 0}}>
                    {this.props.data.map((item, index) => (
                        <Article
                            key={index}
                            author={item.author}
                            text={item.text}
                            bigText={item.bigText}
                            index={index}
                            count={item.count}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}


News.propTypes = {
    data: PropTypes.array.isRequired
};

News.defaultProps = {
    data: []
};


export default News;
