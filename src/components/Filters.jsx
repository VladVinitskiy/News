import React from 'react';

const Filters = ({getNews, newsSource}) => {
    return (
        <div className='mr-lg-5 navbar navbar_mode'>
            <span className={`nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 text-dark text_mode ${newsSource==="global" ? "active" :""}`}
                  onClick={()=>getNews("", "global")}>Global News</span>
            <span className={`nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 text-dark text_mode ${newsSource==="ukrainian" ? "active" :""}`}
                  onClick={()=>getNews("?type=ukrainian", "ukrainian")}>Ukrainian News</span>
        </div>
    )
};

export default Filters;