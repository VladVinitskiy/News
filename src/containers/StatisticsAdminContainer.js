import {connect} from 'react-redux';
import StatisticsAdminComponent from '../components/StatisticsAdminComponent';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const StatisticsAdminContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(StatisticsAdminComponent));


export default StatisticsAdminContainer;