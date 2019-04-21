import {ADD_NEWS, TOGGLE_NEWS, ADD_COMMENT, ADD_LIKE, SHOW_MORE, GET_NEWS} from "../../constants/constants";
import newsData from '../../newsData';

export default function news(state = [], action) {
    switch (action.type) {
        case GET_NEWS:
            return action.payload.length === 0 ? newsData : action.payload;
        case ADD_NEWS:
            return [
                {
                    author: action.author,
                    text: action.text,
                    bigText: action.bigText,
                    comments: action.comments,
                    status: action.status,
                    like: action.like
                },
                ...state
            ];
        case TOGGLE_NEWS:
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
        case ADD_LIKE:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        like: action.like + 1
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


//Action with using and saving data in localStorage
// export default function news(state=localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : newsData,action) {
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