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
        addNews: (author, text, bigText) => dispatch(addNews(author, text, bigText)),
        validateForm:(author,text,bigText,agree)=> dispatch(validateForm(author,text,bigText,agree))
    }
};

const AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddNews);

export default AddTodo;
