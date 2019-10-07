const defaultState = {
    users:[],
    statistics:[],
};

const adminData = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_USERS_FULFILLED":
            return Object.assign({}, state, {
                users: action.payload.length === 0 ? [] : action.payload
            });
        case "GET_STATISTICS_FULFILLED":
            return Object.assign({}, state, {
                statistics: action.payload.length === 0 ? [] : action.payload
            });
        case "ADD_USER_FULFILLED":
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
        case "REMOVE_USER_FULFILLED":
            return state.filter((user) => action.payload !== user.name);
        default:
            return state;
    }
};

export default adminData;