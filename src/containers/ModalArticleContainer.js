import {connect} from 'react-redux';
import {showArticleModal, switchPreviewMode, showAddArticleModal, switchEditMode} from '../action/filters';
import ModalArticle from '../components/ModalArticle';
import {postArticle, postComment, deleteComment, postCommentIO, deleteCommentIO} from "../action/apiRequests";

const mapStateToProps = state => {
    const { filters } = state;
    return {
        chosenArticle: filters.chosenArticle,
        isArticleModalOpen: filters.isArticleModalOpen,
        previewMode: filters.previewMode,
        newsSource: filters.newsSource,
        isLoggedIn: filters.isLoggedIn,
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showArticleModal: state => dispatch(showArticleModal(state)),
        showAddArticleModal: state => dispatch(showAddArticleModal(state)),
        switchPreviewMode: (state) => dispatch(switchPreviewMode(state)),
        switchEditMode: (state) => dispatch(switchEditMode(state)),
        postArticle: (data, source) => dispatch(postArticle(data, source)),
        postComment: (id, source, comment) => dispatch(postComment(id, source, comment)),
        postCommentIO: (payload) => dispatch(postCommentIO(payload)),
        deleteComment: (newsSource, articleId, commentId) => dispatch(deleteComment(newsSource, articleId, commentId)),
        deleteCommentIO: (payload) => dispatch(deleteCommentIO(payload)),
    }
};

const ModalArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ModalArticle);

export default ModalArticleContainer;
