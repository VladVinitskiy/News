import newsData from '../newsData';

const defaultState= [];

export default function news(state = defaultState, action) {
    switch (action.type) {
        case "GET_NEWS_FULFILLED":
            return (action.payload && action.payload.length !== 0) ?  action.payload : newsData;
        case "POST_ARTICLE_FULFILLED":
            return action.payload  ?  [action.payload, ...state] : newsData;
        case "DELETE_ARTICLE_FULFILLED":
            return action.payload  ? state.filter((item) => action.payload.id !== item.id) : newsData;
        case "ADD_NEWS":
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
        case "ADD_COMMENT":
            return state.map((todo, index) => {
                if (index === action.index) {
                    todo.comments.push({
                        user: action.user,
                        comment: action.comment
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}