import {connect} from 'react-redux';
import Main from '../components/Main'
import {changeNewsLength} from '../action/changeNewsLength'

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isAuthorize: state.isAuthorize,
        newsLength: state.newsLength
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeNewsLength:(newsLength)=> dispatch(changeNewsLength(newsLength))
    }
};

const MainContent = connect(mapStateToProps,mapDispatchToProps)(Main);

export default MainContent;
