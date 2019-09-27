import {connect} from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import {logout, editUser} from "../action/apiRequests";
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
        removeUser: (name) => dispatch(removeUser(name)),
        editUser: (id, data) => dispatch(editUser(id, data)),
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default ProfileContainer;
