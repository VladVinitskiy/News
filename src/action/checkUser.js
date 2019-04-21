import {VALIDATE_USER} from "../constants/constants";

export function checkUser(name, password, email, phone) {
    return {
        type: VALIDATE_USER,
        name,
        password,
        email,
        phone
    }
}