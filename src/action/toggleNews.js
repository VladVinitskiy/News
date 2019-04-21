import {TOGGLE_NEWS} from "../constants/constants";

export function toggleNews(index) {
    return {type: TOGGLE_NEWS, index}
}