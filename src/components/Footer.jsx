import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../action/action';

const Footer = () =>{
    return(
        <div>
            <p className='filters'>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>Всі</FilterLink>
                {', '}
                <FilterLink filter={VisibilityFilters.SHOW_READEN}>Прочитані</FilterLink>
                {', '}
                <FilterLink filter={VisibilityFilters.SHOW_UNREADEN}>Непрочитані</FilterLink>
            </p>
        </div>
    )
};

export default Footer;