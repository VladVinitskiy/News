import {GET_NEWS} from '../constants/constants'

export const getNews = () => dispatch => {
    fetch('http://localhost:5000/news')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_NEWS, payload: data}))
        .catch(() => dispatch({type: GET_NEWS, payload: []}));
};