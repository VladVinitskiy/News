import {connect} from 'react-redux';
import AddNews from '../components/AddNews'
import {addNews} from '../action/addNews';
import {validateForm} from '../action/validateForm';

const mapStateToProps = state => {
    return {
        correctlyForm: state.correctlyForm
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNews: (author, text, description, comments, status, like) => dispatch(addNews(author, text, description, comments, status, like)),
        validateForm: (author, text, description, agree) => dispatch(validateForm(author, text, description, agree))
    }
};

const AddNewsContainer = connect(mapStateToProps, mapDispatchToProps)(AddNews);

export default AddNewsContainer;
