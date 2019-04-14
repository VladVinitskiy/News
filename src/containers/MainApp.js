import {connect} from 'react-redux';
import App from '../components/App';
import {getNews} from '../action/getNews';
import {getUsers} from '../action/getUsers';

const mapStateToProps = () => {return {}};

const mapDispatchToProps = dispatch => {
    return {
        getNews:()=> dispatch(getNews()),
        getUsers:()=> dispatch(getUsers())
    }
};

const MainApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default MainApp;