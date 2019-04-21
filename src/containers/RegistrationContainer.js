import {connect} from 'react-redux';
import Registration from '../components/Registration'
import {addUser} from '../action/addUser';

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (name, email, password, phone) => dispatch(addUser(name, email, password, phone))
    }
};

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;
