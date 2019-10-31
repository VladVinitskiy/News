import Cookies from "js-cookie"
import sources from "../sources"

const defaultState = {
    isLoggedIn: !!Cookies.getJSON("isLoggedIn"),
    chosenArticle: {},
    isArticleModalOpen: false,
    previewMode: false,
    editMode: false,
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
        case 'POST_COMMENT_FULFILLED': {
            return Object.assign({}, state, {
                chosenArticle: Object.assign({}, state.chosenArticle, {
                    comments: [...state.chosenArticle.comments, action.payload.comment]
                })
            });
        }
        case 'DELETE_COMMENT_FULFILLED': {
            return Object.assign({}, state, {
                chosenArticle: Object.assign({}, state.chosenArticle, {
                    comments: state.chosenArticle.comments.filter(({id})=> id !== action.payload.commentId)
                })
            });
        }
        case 'SWITCH_PREVIEW_MODE': {
            return Object.assign({}, state, {
                previewMode: action.payload
            });
        }
        case 'SWITCH_EDIT_MODE': {
            return Object.assign({}, state, {
                editMode: action.payload
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