import {ADD_NEWS} from "../constants/constants";
const axios = require('axios');

export const addNews = (author, text, bigText, comments, status, like) => dispatch => {
    let data = {
        "author": author,
        "text": text,
        "bigText": bigText,
        "comments": comments,
        "status": status,
        "like": like
    };
    axios.post("http://localhost:5000/news", data)
        .then(() => dispatch({type: ADD_NEWS, author, text, bigText, comments, status, like}));
};

