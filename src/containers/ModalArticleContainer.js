import {connect} from 'react-redux';
import {showArticleModal} from '../action/filters';
import ModalArticle from '../components/ModalArticle';

const mapStateToProps = state => {
    const { filters } = state;
    return {
        chosenArticle: filters.chosenArticle,
        isArticleModalOpen: filters.isArticleModalOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showArticleModal: state => dispatch(showArticleModal(state)),
    }
};

const ModalArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ModalArticle);

export default ModalArticleContainer;
