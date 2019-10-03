import {connect} from 'react-redux';
import AddArticle from '../components/AddArticle'
import {postArticle} from "../action/apiRequests";
import {showArticleModal, chooseArticle, showAddArticleModal, switchPreviewMode} from "../action/filters";

const mapStateToProps = state => {
    return {
        user: state.user,
        newsSource: state.filters.newsSource,
        previewMode: state.filters.previewMode,
        isOpenAddArticleModal: state.filters.isOpenAddArticleModal,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: (article, type) => {
            dispatch(postArticle(article, type));
            dispatch(showAddArticleModal(false));
        },
        showAddArticleModal: (state) => dispatch(showAddArticleModal(state)),
        chooseArticle: article => {
            dispatch(chooseArticle(article));
            dispatch(switchPreviewMode(true));
            dispatch(showArticleModal(true));
            dispatch(showAddArticleModal(false));
        },
    }
};

const AddArticleContainer = connect(mapStateToProps,mapDispatchToProps)(AddArticle);

export default AddArticleContainer;
