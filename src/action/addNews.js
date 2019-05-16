import {ADD_NEWS} from "../constants/constants";

const axios = require('axios');

export function addNews(author, text, bigText) {
    return {
        type: ADD_NEWS,
        author,
        text,
        bigText
    }
}

export function postNews(author, text, bigText, comments, status, like) {
    let data = {
        "author": author,
        "text": text,
        "bigText": bigText,
        "comments": comments,
        "status": status,
        "like": like
    };
    axios.post("http://localhost:5000/news", data);
}