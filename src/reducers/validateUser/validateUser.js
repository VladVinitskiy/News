import {VALIDATE_USER,REMOVE_CURRENT_USER} from "../../constants/constants";

export default function validateUser(state = localStorage.getItem('remembered')!==null? JSON.parse(localStorage.getItem('remembered')):{}, action) {
    switch (action.type) {
        case VALIDATE_USER:
            return{
                name: action.name,
                password: action.password,
                email: action.email,
                phone:action.phone
            };
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state
    }
}
