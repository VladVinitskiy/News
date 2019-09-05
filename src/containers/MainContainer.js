import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent'
import { getNews } from '../action/apiRequests'

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isLoggedIn: state.filters.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:()=> dispatch(getNews())
    }
};

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(MainComponent);

export default MainContainer;
