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
        addNews: (author, text, bigText, comments, status, like) => dispatch(addNews(author, text, bigText, comments, status, like)),
        validateForm: (author, text, bigText, agree) => dispatch(validateForm(author, text, bigText, agree))
    }
};

const AddNewsContainer = connect(mapStateToProps, mapDispatchToProps)(AddNews);

export default AddNewsContainer;
