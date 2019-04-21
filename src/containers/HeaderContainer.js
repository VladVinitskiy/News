import {connect} from 'react-redux';
import Header from '../components/Header';
import {checkAuthorize} from '../action/checkAuthorize';
import {changePassword, changeEmail, changePhone} from '../action/changeData';
import {removeCurrentUser} from '../action/removeCurrentUser';
import {removeUser} from '../action/removeUser';


const mapStateToProps = state => {
    return {
        users: state.users,
        user: localStorage.getItem('remembered') !== null ? JSON.parse(localStorage.getItem('remembered')) : state.currentUser,
        isAuthorize: state.isAuthorize
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuthorize: (statement) => dispatch(checkAuthorize(statement)),
        changePassword: (name, password,) => dispatch(changePassword(name, password)),
        changeEmail: (name, email) => dispatch(changeEmail(name, email)),
        changePhone: (name, phone) => dispatch(changePhone(name, phone)),
        removeCurrentUser: () => dispatch(removeCurrentUser()),
        removeUser: (name) => dispatch(removeUser(name)),
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;