import {VisibilityFilters} from '../../constants/constants';

const {SHOW_ALL, SHOW_READEN, SHOW_UNREADEN} = VisibilityFilters;

export default function getVisibleTodos(news, filter) {
    switch (filter) {
        case SHOW_ALL:
            return news;
        case SHOW_READEN:
            return news.filter(t => t.status);
        case SHOW_UNREADEN:
            return news.filter(t => !t.status);
        default:
            return news;
    }
};
