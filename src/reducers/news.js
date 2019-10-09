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
        case "POST_COMMENT_FULFILLED":
            return state.map((article) => {
                if (article.id === action.payload.id) {
                    return Object.assign({}, article, {
                        comments: [action.payload.comment, ...article.comments]
                    })
                }
                return article;
            });
        case "DELETE_COMMENT_FULFILLED":
            return state.map((article) => {
                if (article.id === action.payload.articleId) {
                    return Object.assign({}, article, {
                        comments: article.comments.filter(({id})=> id !== action.payload.commentId)
                    })
                }
                return article;
            });
        default:
            return state;
    }
}