import {ADD_NEWS, TOGGLE_TODO} from "../../action/action";
import newsData from '../../newsData';



export default function todos(state=newsData,action) {
    switch (action.type) {
        case ADD_NEWS:
            return[
                {
                    author:action.author,
                    text:action.text,
                    bigText:action.bigText,
                    status:false
                },
                ...state
            ];
        case TOGGLE_TODO:
            return state.map((todo,index)=> {
                if (index===action.index){
                    return Object.assign({},todo,{
                        status: !todo.status
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