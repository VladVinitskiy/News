import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../action/apiRequests';
import {removeUser} from '../action/removeUser';


const mapStateToProps = state => {
    return {
        isLoggedIn: state.filters.isLoggedIn,
        isAdmin: state.user.role,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        removeUser: (name) => dispatch(removeUser(name)),
    }
};

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
