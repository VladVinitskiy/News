import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import Cookies from "js-cookie";
import moment from "moment";
import jwt from "jsonwebtoken"

const API_URL = process.env.REACT_APP_API_URL;

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
    const payload = apiCall("get", `news?source=${options}`)
        .then((response) => response)
        .catch(() => {
            toastr.error("Error", "Something went wrong");
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
        .catch(() => {
            toastr.error("Error", "Something went wrong");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'GET_USERS',
            payload
        });
    }
};

export const getStatistics = () => {
    const payload = apiCall("get", "statistics")
        .then((response) => response)
        .catch(() => {
            toastr.error("Error", "Something went wrong");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'GET_STATISTICS',
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

export function postArticle(data, source) {
    const payload = apiCallv2("post", `article?source=${source}`, data)
        .then((response) => {
            toastr.success("Success", "Article have successfully added");
            return response
        })
        .catch((e) => {
            toastr.info("Error", "Article haven't added");
            return {
                error : e.response.statusText
            }
        });

    return {
        type: "POST_ARTICLE",
        payload
    }
}

export const postStatistics = ()=>{
    axios("https://api.ipify.org")
        .then((response) => {
            const token = jwt.sign({ token: response.data }, 'shhhhh');
            apiCall("post", `statistics?token=${token}`,{date: moment.utc()})
                .catch(() => {
                    toastr.error("Error", "Something went wrong");
                    return false;
                });
        })
};

export const postComment = (id, source, comment) =>{
    const payload = apiCall("post", `comment?source=${source}&articleId=${id}`, comment)
        .then((response) => response)
        .catch(() => {
            toastr.error("Error", "Something went wrong");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'POST_COMMENT',
            payload
        });
    }
};

export function postCommentIO(payload) {
    return {
        type: "POST_COMMENT_FULFILLED",
        payload
    }
}

export function deleteCommentIO(payload) {
    return {
        type: "DELETE_COMMENT_FULFILLED",
        payload
    }
}

export const deleteComment = (newsSource, articleId, commentId) =>{
    const payload = apiCall("delete", `comment?source=${newsSource}&articleId=${articleId}&commentId=${commentId}`)
        .then((response) => response)
        .catch(() => {
            toastr.error("Error", "Something went wrong");
            return false;
        });

    return (dispatch) => {
        dispatch({
            type: 'DELETE_COMMENT',
            payload
        });
    }
};

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

export function editArticle(data, id) {
    const payload = apiCallv2("put", `article?id=${id}`, data)
        .then((response) => {
            toastr.success("Success", "Article have successfully edited");
            return response
        })
        .catch(() => {
            toastr.info("Error", "Article haven't edited");
            return null
        });

    return {
        type: "EDIT_ARTICLE",
        payload
    }
}


export const login = ({email, password}, remember) => {
    const cryptoPassword = jwt.sign({password}, 'cryptoPassword');

    const payload = apiCall("post", "login", {email, password: cryptoPassword})
        .then((response) => {
            if(remember) {
                Cookies.set('isLoggedIn', true, { expires: 7 });
                Cookies.set('token', response.token, { expires: 7 });
            }
            return response.response
        })
        .catch((e) => {
            toastr.error("Error", e.response.statusText);
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
        .then((response) => {
            if (response.error) {
                Cookies.remove('isLoggedIn');
                Cookies.remove('token');
                toastr.error(response.status, response.message);
                return false
            }
            return response
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