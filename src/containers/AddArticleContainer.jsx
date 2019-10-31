import {connect} from 'react-redux';
import AddArticle from '../components/AddArticle'
import {deleteArticle, postArticle} from "../action/apiRequests";
import {showArticleModal, chooseArticle, showAddArticleModal, switchPreviewMode, switchEditMode} from "../action/filters";

const mapStateToProps = state => {
    return {
        user: state.user,
        newsSource: state.filters.newsSource,
        previewMode: state.filters.previewMode,
        editMode: state.filters.editMode,
        isOpenAddArticleModal: state.filters.isOpenAddArticleModal,
        chosenArticle: state.filters.chosenArticle,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: (article, type) => dispatch(postArticle(article, type)),
        showAddArticleModal: (state) => dispatch(showAddArticleModal(state)),
        switchEditMode: (state) => dispatch(switchEditMode(state)),
        switchPreviewMode: (state) => dispatch(switchPreviewMode(state)),
        showArticleModal: (state) => dispatch(showArticleModal(state)),
        chooseArticle: article => dispatch(chooseArticle(article)),
        deleteArticle: (id, type)=> dispatch(deleteArticle(id, type)),
    }
};

const AddArticleContainer = connect(mapStateToProps,mapDispatchToProps)(AddArticle);

export default AddArticleContainer;