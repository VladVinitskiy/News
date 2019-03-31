import {TOGGLE_TODO} from "../constants/constants";

export function toggleTodo(index) {
    return{type: TOGGLE_TODO,index}
}