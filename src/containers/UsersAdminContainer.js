import {connect} from 'react-redux';
import UsersAdminComponent from '../components/UsersAdminComponent';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const UsersAdminContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(UsersAdminComponent));


export default UsersAdminContainer;