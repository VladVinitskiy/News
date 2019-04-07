import {ADD_USER} from "../constants/constants";

export function addUser(name, email, password, phone) {
    return {
        type: ADD_USER,
        name,
        email,
        password,
        phone
    }
}