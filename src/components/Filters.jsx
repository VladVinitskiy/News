import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../constants/constants';

const Filters = () => {
    return (
        <div>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_READEN}>Readen</FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_UNREADEN}>Not readen</FilterLink>
        </div>
    )
};

export default Filters;