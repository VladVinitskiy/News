import {connect} from 'react-redux';
import Base from '../components/Base';
import {withRouter} from "react-router-dom";
import {getNews, getCurrentSession, login, addUser} from '../action/apiRequests';

const mapStateToProps = (state) => {
    return {
        news: state.news,
        isLoggedIn: state.filters.isLoggedIn,
        isAdmin: state.user.role,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:(options="")=> dispatch(getNews(options)),
        getCurrentSession:() => dispatch(getCurrentSession()),
        login:(data, remembered) => dispatch(login(data, remembered)),
        addUser:(data) => dispatch(addUser(data)),
    }
};

const BaseContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(Base));

export default BaseContainer;