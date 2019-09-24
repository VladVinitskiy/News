import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent'
import { getNews } from '../action/apiRequests'
import {switchNewsSource} from "../action/filters";

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isLoggedIn: state.filters.isLoggedIn,
        newsSource: state.filters.newsSource,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:(options="", source)=>{
            dispatch(getNews(options));
            dispatch(switchNewsSource(source))
        },
    }
};

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(MainComponent);

export default MainContainer;
