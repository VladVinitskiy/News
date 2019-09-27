import {ADD_USER, REMOVE_USER} from "../constants/constants";
import {deleteUser} from "../action/removeUser";
import {addUSER} from "../action/addUser";

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
        case REMOVE_USER:
            deleteUser(action.payload);
            return state.filter((user) => action.payload !== user.name);
        default:
            return state;
    }
}

