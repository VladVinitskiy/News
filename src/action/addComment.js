import {ADD_COMMENT} from "../constants/constants";

export function addComment(index, user,comment) {
    return {
        type: ADD_COMMENT,
        index,
        user,
        comment
    }
}