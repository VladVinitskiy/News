import {ADD_USER, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_PHONE, REMOVE_USER, GET_USERS} from "../constants/constants";
import {deleteUser} from "../action/removeUser";
import {addUSER} from "../action/addUser";
import {changeData} from "../action/changeData";

const defaultState = [];

export default function users(state = defaultState, action) {
    switch (action.type) {
        case "GET_USERS_FULFILLED":
            return action.payload.length ===0 ? defaultState : action.payload;
        case ADD_USER:
            addUSER(action.name, action.email, action.password, action.phone);
            return [
                {
                    name: action.name,
                    email: action.email,
                    password: action.password,
                    phone: action.phone
                },
                ...state
            ];
        case 'EDIT_USER_FULFILLED': {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        ...action.payload
                    })
                }
                return item;
            })
        }
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

