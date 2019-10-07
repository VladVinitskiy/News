import {connect} from 'react-redux';
import StatisticsAdminComponent from '../components/StatisticsAdminComponent';
import {withRouter} from 'react-router-dom';
import {getStatistics} from "../action/apiRequests";


const mapStateToProps = (state) => {
    return {
        statistics: state.adminData.statistics
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatistics: () => dispatch(getStatistics())
    };
};
const StatisticsAdminContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(StatisticsAdminComponent));


export default StatisticsAdminContainer;