import {
    VALIDATE_USER,
    REMOVE_CURRENT_USER,
    CHANGE_PASSWORD,
    CHANGE_PHONE,
    CHANGE_EMAIL
} from "../../constants/constants";


export default function currentUser(state = localStorage.getItem('remembered') !== null ? JSON.parse(localStorage.getItem('remembered')) : {}, action) {
    switch (action.type) {
        case VALIDATE_USER:
            return {
                name: action.name,
                password: action.password,
                email: action.email,
                phone: action.phone
            };
        case CHANGE_PASSWORD:
            if (localStorage.getItem("remembered")) {
                let remembered = JSON.parse(localStorage["remembered"]);
                remembered.password = action.password;
                localStorage["remembered"] = JSON.stringify(remembered);
            }
            return Object.assign({}, state, {
                password: action.password
            });
        case CHANGE_PHONE:
            if (localStorage.getItem("remembered")) {
                let remembered = JSON.parse(localStorage["remembered"]);
                remembered.phone = action.phone;
                localStorage["remembered"] = JSON.stringify(remembered);
            }
            return Object.assign({}, state, {
                phone: action.phone
            });
        case CHANGE_EMAIL:
            if (localStorage.getItem("remembered")) {
                let remembered = JSON.parse(localStorage["remembered"]);
                remembered.email = action.email;
                localStorage["remembered"] = JSON.stringify(remembered);
            }
            return Object.assign({}, state, {
                email: action.email
            });
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state
    }
}
