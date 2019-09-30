import {connect} from 'react-redux';
import AddArticle from '../components/AddArticle'
import {postArticle} from "../action/apiRequests";
import {chooseArticle, showArticleModal} from "../action/filters";

const mapStateToProps = state => {
    return {
        user: state.user,
        newsSource: state.filters.newsSource,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: (article, type) => dispatch(postArticle(article, type)),
        chooseArticle: article => {
            dispatch(chooseArticle(article));
            dispatch(showArticleModal(true));
        },
    }
};

const AddArticleContainer = connect(mapStateToProps,mapDispatchToProps)(AddArticle);

export default AddArticleContainer;
