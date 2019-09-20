import React from 'react';

const Filters = ({getNews}) => {
    return (
        <div className='mr-lg-5 navbar navbar_mode'>
            <span className='nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 text-dark text_mode' onClick={()=>getNews()}>Global News</span>
            <span className='nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 text-dark text_mode' onClick={()=>getNews("?type=ukrainian")}>Ukrainian News</span>
        </div>
    )
};

export default Filters;