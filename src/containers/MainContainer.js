import {connect} from 'react-redux';
import Main from '../components/Main'
import {getNews} from '../action/getNews'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        isAuthorize: state.isAuthorize,
        newsLength: state.newsLength
    }
};

const mapDispatchToProps = dispatch => {
    return {getNews: () => dispatch(getNews())}
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
