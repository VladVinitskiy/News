import {connect} from 'react-redux';
import {showArticleModal, switchPreviewMode, showAddArticleModal} from '../action/filters';
import ModalArticle from '../components/ModalArticle';
import {deleteArticle} from "../action/apiRequests";

const mapStateToProps = state => {
    const { filters } = state;
    return {
        chosenArticle: filters.chosenArticle,
        isArticleModalOpen: filters.isArticleModalOpen,
        previewMode: filters.previewMode,
        newsSource: filters.newsSource,
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showArticleModal: state => dispatch(showArticleModal(state)),
        showAddArticleModal: state => dispatch(showAddArticleModal(state)),
        deleteArticle: (id, type)=> dispatch(deleteArticle(id, type)),
        switchPreviewMode: (state) => dispatch(switchPreviewMode(state)),
    }
};

const ModalArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ModalArticle);

export default ModalArticleContainer;
