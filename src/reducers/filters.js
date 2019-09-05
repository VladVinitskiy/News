import Cookies from "js-cookie"

const defaultState = {
    isLoggedIn: !!Cookies.getJSON("isLoggedIn"),
};

const filters = (state = defaultState, action) =>{
    switch (action.type) {
        case 'LOG_IN_FULFILLED': {
            return Object.assign({}, state, {
                isLoggedIn: action.payload ? true : state.isLoggedIn
            });
        }

        case 'LOGGED_OUT_FULFILLED': {
            return Object.assign({}, state, {
                isLoggedIn: action.payload ? false : state.isLoggedIn
            });
        }

        default:
            return state;
    }
};

export default  filters;