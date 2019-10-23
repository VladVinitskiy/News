import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        show: state.spinner,
    };
};

const SpinnerContainer = withRouter(connect(mapStateToProps)(Spinner));


export default SpinnerContainer;