import {GET_NEWS} from '../constants/constants'

const axios = require('axios');

export const getNews = () => dispatch => {
    axios.get('http://localhost:5000/news')
        .then((response) => response.data)
        .then((data) => dispatch({type: GET_NEWS, payload: data}))
        .catch((e) => {
            dispatch({type: GET_NEWS, payload: []});
            console.warn(e.toString());
        })
};