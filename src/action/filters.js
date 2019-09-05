import {SET_VISIBILITY_FILTER} from "../constants/constants";

export function toggleTodo(index) {
    return {
        type: "TOGGLE_TODO",
        index
    }
}

export function toggleNews(index) {
    return {
        type: "TOGGLE_NEWS",
        index
    }
}

export function showMore(index, more) {
    return {
        type: "SHOW_MORE",
        index,
        more
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}