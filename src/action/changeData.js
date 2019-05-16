import {CHANGE_PASSWORD,CHANGE_EMAIL,CHANGE_PHONE} from "../constants/constants";
const axios = require('axios');

export function changeData(name,email,password,phone) {
    let data ={
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    };
    axios.put(`http://localhost:5000/users/${name}`, data);
}


export function changePassword(name,email,password,phone) {
    return {
        type: CHANGE_PASSWORD,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}


export function changeEmail(name,email,password,phone) {
    return {
        type: CHANGE_EMAIL,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}


export function changePhone(name,email,password,phone) {
    return {
        type: CHANGE_PHONE,
        name:name,
        email:email,
        password:password,
        phone: phone
    }
}