import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        show: state.spinner,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const SpinnerContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(Spinner));


export default SpinnerContainer;