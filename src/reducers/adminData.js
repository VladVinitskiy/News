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
        default:
            return state;
    }
};

export default adminData;