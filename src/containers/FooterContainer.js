import {connect} from 'react-redux';
import Footer from '../components/Footer'
import getVisibleNews from "../reducers/visibilityFilter/getVisibleNews";

const mapStateToProps = state => {
    return {
        newsLength: getVisibleNews(state.news, state.visibilityFilter).length
    }
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
