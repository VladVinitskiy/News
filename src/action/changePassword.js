import {CHANGE_PASSWORD} from "../constants/constants";

export function changePassword(name,password) {
    return {
        type: CHANGE_PASSWORD,
        name:name,
        password: password
    }
}