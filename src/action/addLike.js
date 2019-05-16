import {ADD_LIKE} from "../constants/constants";

export function addLike(index, like) {
    return {type: ADD_LIKE,index, like}
}