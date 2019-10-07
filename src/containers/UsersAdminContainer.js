import {connect} from 'react-redux';
import UsersAdminComponent from '../components/UsersAdminComponent';
import {withRouter} from 'react-router-dom';
import {getUsers} from '../action/apiRequests';


const mapStateToProps = (state) => {
    return {
        users: state.adminData.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    };
};
const UsersAdminContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(UsersAdminComponent));


export default UsersAdminContainer;