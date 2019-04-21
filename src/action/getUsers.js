import {GET_USERS} from '../constants/constants'

export const getUsers = () => dispatch => {
    fetch('http://localhost:5000/users')
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_USERS, payload: data}))
        .catch((e) => {
            console.warn(e.toString());
            dispatch({type: GET_USERS, payload: []})
        });
};