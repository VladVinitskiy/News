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
        addNews: (author, text, description) => dispatch(addNews(author, text, description)),
        validateForm:(author,text,description,agree)=> dispatch(validateForm(author,text,description,agree))
    }
};

const AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddNews);

export default AddTodo;
