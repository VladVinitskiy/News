import {REMOVE_USER} from "../constants/constants";

export function removeUser(name) {
    return {
        type: REMOVE_USER,
        payload:name
    }
}