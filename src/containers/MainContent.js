import {connect} from 'react-redux';
import Main from '../components/Main'
import {getNews} from '../action/getNews'

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isAuthorize: state.isAuthorize,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:()=> dispatch(getNews())
    }
};

const MainContent = connect(mapStateToProps,mapDispatchToProps)(Main);

export default MainContent;
