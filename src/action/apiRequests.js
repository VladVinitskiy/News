import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/";

export const apiCall = (method, type, data = null) => {
    const url = `${API_URL + type}`;

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": method,
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": data,
        // "withCredentials": true
    };

    return axios(settings)
        .then( response => response.data)
};

export const getNews = (options="") => {
    const payload = apiCall("get", "news"+options)
        .then((response) => response)
        .catch((e) => {
            console.log(e);
            // toastr.error(e.response.data.result, e.response.data.response.errors);
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'GET_NEWS',
            payload
        });
    }
};


export const getUsers = () => {
    const payload = apiCall("get", "users")
        .then((response) => response)
        .catch((e) => {
            console.log(e);
            // toastr.error(e.response.data.result, e.response.data.response.errors);
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'GET_USERS',
            payload
        });
    }
};

export const addUser = (data) => {
    const payload = apiCall("post", "user", data)
        .then((response) => response)
        .catch((e) => {
            console.log(e);
            // toastr.error(e.response.data.result, e.response.data.response.errors);
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'ADD_USER',
            payload
        });
    }
};

export function addNews(data) {
    const payload = apiCall("post", "news", data)
        .then((response) => response.content)
        .catch((e) => {
            toastr.info(e.response.data.result, e.response.data.response.errors);
            return []
        });

    return {
        type: "ADD_NEWS",
        payload
    }
}


export const login = (data, remember) => {
    const payload = apiCall("post", "login", {"email": "kalit@gmail.com", "password": "password"}) //{"email": "kalit@gmail.com", "password": "password"}
        .then((response) => {
            if(remember) {
                Cookies.set('isLoggedIn', true, { expires: 7 });
            }
            return response
        })
        .catch((e) => {
            toastr.error(e.response.data.result, e.response.data.response.errors);
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'LOG_IN',
            payload
        });
    }
};

export const getCurrentSession = () => {
    const payload = apiCall("get", "me")
        .then((response) => response)
        .catch(() => {
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'GET_CURRENT_SESSION',
            payload
        });
    }
};

export const logout = () => {
    const payload = apiCall("get","logout")
        .then((response) => {
            Cookies.remove('isLoggedIn');
            return response
        })
        .catch(() => {
            toastr.error("Error", "Something went wrong, try again");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'LOGGED_OUT',
            payload
        });
    }
};