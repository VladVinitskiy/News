import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent'
import { getNews } from '../action/apiRequests'
import {switchNewsSource} from "../action/filters";

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isLoggedIn: state.filters.isLoggedIn,
        newsSource: state.filters.newsSource,
        sources: state.filters.sources,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:(countryCode)=>{
            dispatch(getNews(countryCode));
            // dispatch(getNews(`?source=${countryCode}`));
            dispatch(switchNewsSource(countryCode))
        },
    }
};

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(MainComponent);

export default MainContainer;
