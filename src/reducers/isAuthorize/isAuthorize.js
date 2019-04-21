import {CHANGE_STATE_OF_AUTHORIZE} from "../../constants/constants";

export default function isAuthorize(state = localStorage.getItem('remembered') !== null, action) {
    switch (action.type) {
        case CHANGE_STATE_OF_AUTHORIZE:
            return action.statement;
        default:
            return state
    }
}
