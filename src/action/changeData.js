import {CHANGE_PASSWORD, CHANGE_EMAIL, CHANGE_PHONE} from "../constants/constants";

const axios = require('axios');

export const changePassword = (name, password) => dispatch => {
    axios.put(`http://localhost:5000/users/${name}`, {"type": "password", "password": password})
        .then(() => dispatch({type: CHANGE_PASSWORD, name: name, password: password}));
};


export const changeEmail = (name, email) => dispatch => {
    axios.put(`http://localhost:5000/users/${name}`, {"type": "email", "email": email})
        .then(() => dispatch({type: CHANGE_EMAIL, name: name, email: email}));
};


export const changePhone = (name, phone) => dispatch => {
    axios.put(`http://localhost:5000/users/${name}`, {"type": "phone", "phone": phone})
        .then(() => dispatch({type: CHANGE_PHONE, name: name, phone: phone}));
};