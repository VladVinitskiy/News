const defaultState= {
    name: "",
    surname:"",
    email: "",
    phone: "",
    birthday:""
};

const user = (state = defaultState, action) =>{
    switch (action.type) {
        case 'LOG_IN_FULFILLED': {
            return action.payload
        }
        case 'GET_CURRENT_SESSION_FULFILLED': {
            return action.payload
        }
        case 'LOGGED_OUT_FULFILLED': {
            return defaultState
        }

        default:
            return state;
    }
};

export default user;