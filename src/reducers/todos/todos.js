import {ADD_NEWS, TOGGLE_TODO, ADD_COMMENT, ADD_LIKE,SHOW_MORE,GET_NEWS} from "../../constants/constants";
import newsData from '../../newsData';

function postNews(author, text, bigText, comment,status,like) {
    let data = JSON.stringify({
        "author": author,
        "text": text,
        "bigText": bigText,
        "comment": comment,
        "status": status,
        "like": like
    });
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/news");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

export default function todos(state = [], action) {
    switch (action.type) {
        case GET_NEWS:
            return action.payload===[] ? newsData : action.payload;
        case ADD_NEWS:
            postNews(action.author,action.text,action.bigText,'',false,0);
            return [
                {
                    author: action.author,
                    text: action.text,
                    bigText: action.bigText,
                    comment: '',
                    status: false,
                    like:0
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
                    return Object.assign({}, todo, {
                        comment:action.comment
                    })
                }
                return todo;
            });
        case ADD_LIKE:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        like:action.like+1
                    })
                }
                return todo;
            });
        case SHOW_MORE:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        more:!action.more
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}


//Action with using and saving data in localStorage
// export default function todos(state=localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : newsData,action) {
//     switch (action.type) {
//         case ADD_NEWS:
//             localStorage.setItem('data', JSON.stringify([{
//                 author:action.author,
//                 text:action.text,
//                 bigText:action.bigText,
//                 status:false
//             },...state]));
//             return[
//                 {
//                     author:action.author,
//                     text:action.text,
//                     bigText:action.bigText,
//                     status:false
//                 },
//                 ...state
//             ];
//     }
// }