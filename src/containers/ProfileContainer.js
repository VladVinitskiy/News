import {connect} from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import {logout} from "../action/apiRequests";
import {changeEmail, changePassword, changePhone} from "../action/changeData";
import {removeUser} from "../action/removeUser";

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.filters.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => (logout()),
        changePassword: (name,email,password,phone) => dispatch(changePassword(name,email,password,phone)),
        changeEmail: (name,email,password,phone) => dispatch(changeEmail(name,email,password,phone)),
        changePhone: (name,email,password,phone) => dispatch(changePhone(name,email,password,phone)),
        removeUser: (name) => dispatch(removeUser(name)),
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default ProfileContainer;
