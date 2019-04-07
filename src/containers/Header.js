import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {checkAuthorize} from '../action/checkAuthorize';
import {changePassword} from '../action/changePassword';
import {changeEmail} from '../action/changeEmail';
import {changePhone} from '../action/changePhone';
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
        changePassword: (name,password) => dispatch(changePassword(name,password)),
        changeEmail: (name,email) => dispatch(changeEmail(name,email)),
        changePhone: (name,phone) => dispatch(changePhone(name,phone)),
        removeCurrentUser: () => dispatch(removeCurrentUser()),
        removeUser: (index) => dispatch(removeUser(index)),
    }
};

const Header = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default Header;
