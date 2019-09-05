import {connect} from 'react-redux';
import Base from '../components/Base';
import { getNews, getCurrentSession  } from '../action/apiRequests';

const mapStateToProps = () => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:() => dispatch(getNews()),
        getCurrentSession:() => dispatch(getCurrentSession()),
    }
};

const BaseContainer = connect(mapStateToProps,mapDispatchToProps)(Base);

export default BaseContainer;