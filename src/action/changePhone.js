import {CHANGE_PHONE} from "../constants/constants";

export function changePhone(name,email,password,phone) {
    return {
        type: CHANGE_PHONE,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}