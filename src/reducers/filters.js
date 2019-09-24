import Cookies from "js-cookie"

const defaultState = {
    isLoggedIn: !!Cookies.getJSON("isLoggedIn"),
    chosenArticle: {},
    isArticleModalOpen: false,
    newsSource:"global"
};

const filters = (state = defaultState, action) =>{
    switch (action.type) {
        case 'LOG_IN_FULFILLED':
        case 'GET_CURRENT_SESSION_FULFILLED': {
            return Object.assign({}, state, {
                isLoggedIn: action.payload ? true : state.isLoggedIn
            });
        }
        case 'LOGGED_OUT_FULFILLED': {
            return Object.assign({}, state, {
                isLoggedIn: action.payload ? false : state.isLoggedIn
            });
        }
        case 'CHOOSE_ARTICLE': {
            return Object.assign({}, state, {
                chosenArticle: action.payload ? {...action.payload} : {}
            });
        }
        case 'SHOW_ARTICLE_MODAL': {
            return Object.assign({}, state, {
                isArticleModalOpen: action.payload
            });
        }
        case 'SWITCH_NEWS_SOURCE': {
            return Object.assign({}, state, {
                newsSource: action.payload
            });
        }

        default:
            return state;
    }
};

export default  filters;