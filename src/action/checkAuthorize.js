import {CHANGE_STATE_OF_AUTHORIZE} from "../constants/constants";

export function checkAuthorize(state) {
    return {
        type: CHANGE_STATE_OF_AUTHORIZE,
        statement:state
    }
}