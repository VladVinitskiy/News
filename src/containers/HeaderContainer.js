import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../action/apiRequests';
import {changePassword,changeEmail,changePhone} from '../action/changeData';
import {removeUser} from '../action/removeUser';


const mapStateToProps = state => {
    return {
        isLoggedIn: state.filters.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        changePassword: (name,email,password,phone) => dispatch(changePassword(name,email,password,phone)),
        changeEmail: (name,email,password,phone) => dispatch(changeEmail(name,email,password,phone)),
        changePhone: (name,email,password,phone) => dispatch(changePhone(name,email,password,phone)),
        removeUser: (name) => dispatch(removeUser(name)),
    }
};

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
