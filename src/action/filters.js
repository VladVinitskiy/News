export function chooseArticle(article) {
    return {
        type: "CHOOSE_ARTICLE",
        payload: article
    }
}

export function showArticleModal(state) {
    return {
        type: "SHOW_ARTICLE_MODAL",
        payload: state
    }
}

export function switchNewsSource(source) {
    return {
        type: "SWITCH_NEWS_SOURCE",
        payload: source
    }
}
