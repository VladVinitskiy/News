import {connect} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../action/apiRequests';


const mapStateToProps = state => {
    return {
        isLoggedIn: state.filters.isLoggedIn,
        isAdmin: state.user.role,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
};

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;