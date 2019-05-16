import {ADD_USER} from "../constants/constants";
const axios = require('axios');

export function addUser(name, email, password, phone) {
    return {
        type: ADD_USER,
        name,
        email,
        password,
        phone
    }
}

export const addUSER=(name, email, password, phone)=> {
    let data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    };
    axios.post("http://localhost:5000/users", data);
};