import {CHANGE_NEWS_LENGTH} from "../constants/constants";

export function changeNewsLength(newsLength) {
    return {
        type: CHANGE_NEWS_LENGTH,
        length: newsLength
    }
}