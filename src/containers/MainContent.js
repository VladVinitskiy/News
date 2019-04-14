import {connect} from 'react-redux';
import Main from '../components/Main'
import {changeNewsLength} from '../action/changeNewsLength'
import {getNews} from '../action/getNews'

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isAuthorize: state.isAuthorize,
        newsLength: state.newsLength
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeNewsLength:(newsLength)=> dispatch(changeNewsLength(newsLength)),
        getNews:()=> dispatch(getNews())
    }
};

const MainContent = connect(mapStateToProps,mapDispatchToProps)(Main);

export default MainContent;
