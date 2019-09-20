import {connect} from 'react-redux';
import FooterComponent from '../components/FooterComponent'

const mapStateToProps = state => {
    return {
        newsLength: state.news.length
    }
};

const FooterContainer = connect(mapStateToProps)(FooterComponent);

export default FooterContainer;
