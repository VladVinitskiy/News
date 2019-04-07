import {REMOVE_USER} from "../constants/constants";

export function removeUser(index) {
    return {
        type: REMOVE_USER,
        index
    }
}