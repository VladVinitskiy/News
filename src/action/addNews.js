import {ADD_NEWS} from "../constants/constants";

const axios = require('axios');

export function addNews(author, text, description) {
    return {
        type: ADD_NEWS,
        author,
        text,
        description
    }
}

export function postNews(author, text, description, comments, status) {
    let data = {
        "author": author,
        "text": text,
        "description": description,
        "comments": comments,
        "status": status,
    };
    axios.post("http://localhost:5000/news", data);
}