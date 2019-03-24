export const ADD_NEWS = 'ADD_NEWS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_READEN: 'SHOW_READEN',
    SHOW_UNREADEN: 'SHOW_UNREADEN'
};

export function addNews(author,text,bigText) {
    return{type:ADD_NEWS,author,text,bigText}
}


export function toggleTodo(index) {
    return{type: TOGGLE_TODO,index}
}



export function setVisibilityFilter(filter) {
    return{type:SET_VISIBILITY_FILTER,filter}
}