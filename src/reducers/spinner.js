const spinner = (state = false, action) => {
    switch (action.type) {
        case 'GET_NEWS_PENDING':
        case 'GET_USERS_PENDING':
        case 'GET_STATISTICS_PENDING':
        case 'LOG_IN_PENDING':
        case 'LOGGED_OUT_PENDING':
        case 'EDIT_USER_PENDING':
        case 'POST_ARTICLE_PENDING':
        case 'DELETE_ARTICLE_PENDING':
        case 'POST_COMMENT_PENDING':
        case 'DELETE_COMMENT_PENDING':
            return true;

        case 'GET_NEWS_FULFILLED':
        case 'GET_USERS_FULFILLED':
        case 'GET_STATISTICS_FULFILLED':
        case 'LOG_IN_FULFILLED':
        case 'LOGGED_OUT_FULFILLED':
        case 'EDIT_USER_FULFILLED':
        case 'POST_ARTICLE_FULFILLED':
        case 'DELETE_ARTICLE_FULFILLED':
        case 'POST_COMMENT_FULFILLED':
        case 'DELETE_COMMENT_FULFILLED':
            return false;

        case 'GET_NEWS_REJECTED':
        case 'GET_USERS_REJECTED':
        case 'GET_STATISTICS_REJECTED':
        case 'LOG_IN_REJECTED':
        case 'LOGGED_OUT_REJECTED':
        case 'EDIT_USER_REJECTED':
        case 'POST_ARTICLE_REJECTED':
        case 'DELETE_ARTICLE_REJECTED':
        case 'POST_COMMENT_REJECTED':
        case 'DELETE_COMMENT_REJECTED':
            return false;

        default:
            return state;
    }
};
export default spinner;
