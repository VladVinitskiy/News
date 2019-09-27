import {ADD_NEWS, TOGGLE_TODO, ADD_COMMENT, SHOW_MORE} from "../constants/constants";
import newsData from '../newsData';
import {postNews} from '../action/addNews'

const defaultState= [];

export default function news(state = defaultState, action) {
    switch (action.type) {
        case "GET_NEWS_FULFILLED":
            return (action.payload && action.payload.length !== 0) ?  action.payload : newsData;
        case "POST_ARTICLE_FULFILLED":
            return action.payload  ?  [action.payload, ...state] : newsData;
        case ADD_NEWS:
            postNews(action.author, action.text, action.description, [], false);
            return [
                {
                    author: action.author,
                    text: action.text,
                    description: action.description,
                    comments: [],
                    status: false
                },
                ...state
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        status: !todo.status
                    })
                }
                return todo;
            });
        case ADD_COMMENT:
            return state.map((todo, index) => {
                if (index === action.index) {
                    todo.comments.push({
                        user: action.user,
                        comment: action.comment
                    })
                }
                return todo;
            });
        case SHOW_MORE:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        more: !action.more
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}