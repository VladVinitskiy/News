import {GET_NEWS} from '../constants/constants'

export const getNews = () => dispatch => {
    fetch('http://localhost:5000/news')
        .then((response) => response.json())
        .then(
            (data) => dispatch({type: GET_NEWS, payload: data})
        )
        .catch((e) => {
            dispatch({type: GET_NEWS, payload: []});
            console.warn(e.toString());
        })
};