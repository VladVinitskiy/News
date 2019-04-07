import {CHANGE_EMAIL} from "../constants/constants";

export function changeEmail(name,email) {
    return {
        type: CHANGE_EMAIL,
        name:name,
        email: email
    }
}