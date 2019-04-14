import {CHANGE_EMAIL} from "../constants/constants";

export function changeEmail(name,email,password,phone) {
    return {
        type: CHANGE_EMAIL,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}