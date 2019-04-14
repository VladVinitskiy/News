import {ADD_USER, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_PHONE, REMOVE_USER, GET_USERS} from "../../constants/constants";
import Users from "../../Users";

function addUser(name, email, password, phone) {
    let data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    });
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/users");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

function changeData(name,email,password,phone) {
    let data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    });
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:5000/users/${name}`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

function deleteUser(name) {
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:5000/users/${name}`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

export default function users(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.payload === [] ? Users : action.payload;
        case ADD_USER:
            addUser(action.name, action.email, action.password, action.phone);
            return [
                {
                    name: action.name,
                    email: action.email,
                    password: action.password,
                    phone: action.phone
                },
                ...state
            ];
        case CHANGE_PASSWORD:
            changeData(action.name,action.email,action.password,action.phone);
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        password: action.password
                    })
                }
                return user;
            });
        case CHANGE_PHONE:
            changeData(action.name,action.email,action.password,action.phone);
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        phone: action.phone
                    })
                }
                return user;
            });
        case CHANGE_EMAIL:
            changeData(action.name,action.email,action.password,action.phone);
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        email: action.email
                    })
                }
                return user;
            });
        case REMOVE_USER:
            deleteUser(action.payload);
            return state.filter((user) => action.payload !== user.name);
        default:
            return state;
    }
}

