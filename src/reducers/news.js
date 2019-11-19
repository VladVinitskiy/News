import newsData from '../newsData';

const defaultState= [];

export default function news(state = defaultState, action) {
    switch (action.type) {
        case "GET_NEWS_FULFILLED":
            return action.payload === "Error" ? newsData : action.payload;
        case "POST_ARTICLE_FULFILLED":
            return !action.payload.error ? [action.payload, ...state] : state;
        case "DELETE_ARTICLE_FULFILLED":
            return action.payload  ? state.filter((item) => action.payload.id !== item.id) : newsData;
        case "POST_COMMENT_FULFILLED":
            return state.map((article) => {
                if (article.id === action.payload.id) {
                    return Object.assign({}, article, {
                        comments: [...article.comments, action.payload.comment]
                    })
                }
                return article;
            });
        case "EDIT_ARTICLE_FULFILLED":
            return action.payload ? state.map((article) => {
                if (article.id === action.payload.id) {
                    return action.payload
                }
                return article;
            }) : state ;
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