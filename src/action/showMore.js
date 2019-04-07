import {SHOW_MORE} from "../constants/constants";

export function showMore(index, more) {
    return {
        type: SHOW_MORE,
        index,
        more
    }
}