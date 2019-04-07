import {ADD_COMMENT} from "../constants/constants";

export function addComment(index, comment) {
    return {
        type: ADD_COMMENT,
        index,
        comment
    }
}