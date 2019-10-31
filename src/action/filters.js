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

export function switchPreviewMode(state) {
    return {
        type: "SWITCH_PREVIEW_MODE",
        payload: state
    }
}

export function switchEditMode(state) {
    return {
        type: "SWITCH_EDIT_MODE",
        payload: state
    }
}

export function showAddArticleModal(state) {
    return {
        type: "SHOW_ADD_ARTICLE_MODAL",
        payload: state
    }
}

export function switchNewsSource(source) {
    return {
        type: "SWITCH_NEWS_SOURCE",
        payload: source
    }
}
