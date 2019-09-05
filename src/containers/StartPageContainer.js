import {connect} from 'react-redux';
import StartPage from '../components/StartPage';
import {withRouter} from 'react-router-dom';
import {login, addUser} from "../action/apiRequests";


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login:(data, remembered) => dispatch(login(data, remembered)),
        addUser:(data) => dispatch(addUser(data)),
    };
};
const StartPageContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(StartPage));


export default StartPageContainer;