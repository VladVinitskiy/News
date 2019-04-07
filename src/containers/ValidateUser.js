import {connect} from 'react-redux';
import Authorization from '../components/Authorization'
import {checkUser} from '../action/checkUser';
import {checkAuthorize} from '../action/checkAuthorize';

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkUser: (name, password,email,phone) => dispatch(checkUser(name,password,email,phone)),
        checkAuthorize: (statement) => dispatch(checkAuthorize(statement))
    }
};

const ValidateUser = connect(mapStateToProps,mapDispatchToProps)(Authorization);

export default ValidateUser;
