import Cookies from "js-cookie"
import sources from "../sources"

const defaultState = {
    isLoggedIn: !!Cookies.getJSON("isLoggedIn"),
    chosenArticle: {},
    isArticleModalOpen: false,
    previewMode: false,
    isOpenAddArticleModal: false,
    newsSource:"global",
    sources: sources
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
        case 'SWITCH_PREVIEW_MODE': {
            return Object.assign({}, state, {
                previewMode: action.payload
            });
        }
        case 'SHOW_ARTICLE_MODAL': {
            return Object.assign({}, state, {
                isArticleModalOpen: action.payload
            });
        }
        case 'SHOW_ADD_ARTICLE_MODAL': {
            return Object.assign({}, state, {
                isOpenAddArticleModal: action.payload
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