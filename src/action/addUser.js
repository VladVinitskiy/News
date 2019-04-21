import {ADD_USER} from "../constants/constants";

const axios = require('axios');

export const addUser = (name, email, password, phone) => dispatch => {
    let data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    };
    axios.post("http://localhost:5000/users", data)
        .then(() => dispatch({type: ADD_USER, name, email, password, phone}));
};