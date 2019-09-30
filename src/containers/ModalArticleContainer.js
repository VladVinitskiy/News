import {connect} from 'react-redux';
import {showArticleModal} from '../action/filters';
import ModalArticle from '../components/ModalArticle';
import {deleteArticle} from "../action/apiRequests";

const mapStateToProps = state => {
    const { filters } = state;
    return {
        chosenArticle: filters.chosenArticle,
        isArticleModalOpen: filters.isArticleModalOpen,
        newsSource: state.filters.newsSource,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showArticleModal: state => dispatch(showArticleModal(state)),
        deleteArticle: (id, type)=> dispatch(deleteArticle(id, type))
    }
};

const ModalArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ModalArticle);

export default ModalArticleContainer;
