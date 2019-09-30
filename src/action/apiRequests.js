import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import Cookies from "js-cookie";

let API_URL = "http://localhost:5000/";

// if (process.env.NODE_ENV === 'production') {
if (window.location.hostname === "newssss.herokuapp.com") {
    API_URL = "https://newssss-api.herokuapp.com/"
}

console.log(process.env.NODE_ENV);

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
        // "credentials": 'include',
        // "withCredentials": true
    };

    return axios(settings)
        .then( response => response.data)
};

export const apiCallv2 = (method, type, data = null) => {
    const url = `${API_URL + type}`;

    const form = new FormData();

    for (let key in data){
        form.append(key, data[key])
    }

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": method,
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form,
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
        .then((response) => console.log(response))
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

export function postArticle(data, type) {
    const payload = apiCallv2("post", `article?type=${type}`, data)
        .then((response) => {
            toastr.info("Success", "Article have successfully added");
            return response
        })
        .catch((e) => {
            toastr.info("Error", "Article haven't added");
            return []
        });

    return {
        type: "POST_ARTICLE",
        payload
    }
}

export const editUser = (id, data) => {
    const payload = apiCall("put",`user/${id}`, data)
        .then((response) => {
            toastr.success('Success', `${response.name} has been edited`);
            return response
        })
        .catch(() => {
            toastr.error("Error", "Something went wrong");
            return null
        });

    return (dispatch) => {
        dispatch({
            type: 'EDIT_USER',
            payload
        });
    };
};


export const login = (data, remember) => {
    const payload = apiCall("post", "login", data) //{"email": "kalit@gmail.com", "password": "password"}
        .then((response) => {
            if(remember) {
                Cookies.set('isLoggedIn', true, { expires: 7 });
                Cookies.set('token', response.token, { expires: 7 });
            }
            return response.response
        })
        .catch((e) => {
            toastr.error("Error", "Something went wrong");
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
    const payload = apiCall("get", `session?token=${Cookies.get("token")}`)
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
    const payload = apiCall("get",`logout?token=${Cookies.get("token")}`)
        .then((response) => {
            Cookies.remove('isLoggedIn');
            Cookies.remove('token');
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

export const deleteArticle = (id, type) => {
    const payload = apiCall("delete",`article?id=${id}&type=${type}`)
        .then((response) => {
            return response
        })
        .catch(() => {
            toastr.error("Error", "Something went wrong, try again");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'DELETE_ARTICLE',
            payload
        });
    }
};