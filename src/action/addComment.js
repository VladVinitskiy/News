import {ADD_COMMENT} from "../constants/constants";

const axios = require('axios');

export const addComment = (index, user, comment) => dispatch => {
    axios.put(`http://localhost:5000/news/:${index}`, {"user": user, "msg": comment})
        .then(() => dispatch({type: ADD_COMMENT, index, user, comment}));
};