import {CHANGE_NEWS_LENGTH} from '../../constants/constants';
import newsData from '../../newsData';

export default function changeNewsLength(state = newsData.length, action) {
    switch (action.type) {
        case CHANGE_NEWS_LENGTH:
            return action.length;
        default:
            return state;
    }
}