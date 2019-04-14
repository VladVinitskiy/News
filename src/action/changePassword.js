import {CHANGE_PASSWORD} from "../constants/constants";

export function changePassword(name,email,password,phone) {
    return {
        type: CHANGE_PASSWORD,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}