import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {checkAuthorize} from '../action/checkAuthorize';
import {changePassword,changeEmail,changePhone} from '../action/changeData';
import {removeCurrentUser} from '../action/removeCurrentUser';
import {removeUser} from '../action/removeUser';


const mapStateToProps = state => {
    return {
        users:state.users,
        user: localStorage.getItem('remembered')!==null? JSON.parse(localStorage.getItem('remembered')) : state.validateUser,
        isAuthorize: state.isAuthorize
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuthorize: (statement) => dispatch(checkAuthorize(statement)),
        changePassword: (name,email,password,phone) => dispatch(changePassword(name,email,password,phone)),
        changeEmail: (name,email,password,phone) => dispatch(changeEmail(name,email,password,phone)),
        changePhone: (name,email,password,phone) => dispatch(changePhone(name,email,password,phone)),
        removeCurrentUser: () => dispatch(removeCurrentUser()),
        removeUser: (name) => dispatch(removeUser(name)),
    }
};

const Header = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default Header;
