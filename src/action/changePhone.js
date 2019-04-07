import {CHANGE_PHONE} from "../constants/constants";

export function changePhone(name,phone) {
    return {
        type: CHANGE_PHONE,
        name:name,
        phone: phone
    }
}