import {connect} from 'react-redux';
import FooterComp from '../components/FooterComp'
import getVisibleTodos from "../reducers/visibilityFilter/getVisibleTodos";

const mapStateToProps = state => {
    return {
        newsLength: getVisibleTodos(state.todos, state.visibilityFilter).length
    }
};

const Footer = connect(mapStateToProps)(FooterComp);

export default Footer;
