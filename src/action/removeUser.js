import {REMOVE_USER} from "../constants/constants";
const axios = require('axios');

export function removeUser(name) {
    return {
        type: REMOVE_USER,
        payload:name
    }
}

export const deleteUser =(name)=> {axios.delete(`http://localhost:5000/users/${name}`, null)};