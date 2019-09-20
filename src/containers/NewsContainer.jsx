import {connect} from 'react-redux';
import {toggleNews} from '../action/filters';
import {addComment} from '../action/addComment';
import {addLike} from '../action/addLike';
import {showMore} from '../action/filters';
import News from '../components/News';
import getVisibleNews from '../reducers/visibilityFilter/getVisibleNews'

const mapStateToProps = state => {
    return {
        news: getVisibleNews(state.news, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {onNewsClick: id => {dispatch(toggleNews(id))},
        onAddComment: (index, user, comment) => {dispatch(addComment(index, user, comment))},
        onAddLike: (index, like) => {dispatch(addLike(index, like))},
        showMore: (index, visible) => {dispatch(showMore(index, visible))},
    }
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
