import {REMOVE_USER} from "../constants/constants";

const axios = require('axios');

export const removeUser = (name) => dispatch => {
    axios.delete(`http://localhost:5000/users/${name}`, null)
        .then(() => dispatch({type: REMOVE_USER, payload: name}));
};
