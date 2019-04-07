import {VisibilityFilters} from '../../constants/constants';

const {SHOW_ALL, SHOW_READEN, SHOW_UNREADEN} = VisibilityFilters;

export default function getVisibleTodos(todos, filter) {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_READEN:
            return todos.filter(t => t.status);
        case SHOW_UNREADEN:
            return todos.filter(t => !t.status);
        default:
            return todos;
    }
};
