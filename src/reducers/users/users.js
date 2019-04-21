import {ADD_USER, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_PHONE, REMOVE_USER, GET_USERS} from "../../constants/constants";
import Users from "../../Users";

export default function users(state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.payload === [] ? Users : action.payload;
            // return action.payload;
        case ADD_USER:
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
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        password: action.password
                    })
                }
                return user;
            });
        case CHANGE_PHONE:
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        phone: action.phone
                    })
                }
                return user;
            });
        case CHANGE_EMAIL:
            return state.map((user) => {
                if (user.name === action.name) {
                    return Object.assign({}, user, {
                        email: action.email
                    })
                }
                return user;
            });
        case REMOVE_USER:
            return state.filter((user) => action.payload !== user.name);
        default:
            return state;
    }
}

