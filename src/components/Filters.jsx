import React from 'react';

const Filters = ({getNews, newsSource, sources}) => {
    return (
        <div className='mr-lg-5 navbar navbar_mode filters'>
            <div className='dropleft'>
                <a className={`text_mode nav-link dropdown-toggle text-dark h3`}
                   href='/' data-toggle="dropdown">
                    {newsSource === "global" ? "Choose source": sources.find(it => it.countryCode === newsSource).name}
                </a>
                <div className='filters_sources border-secondary dropdown-menu p-lg-3 p-md-3 p-sm-2 p-1'>
                    <span className={`nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 ${newsSource==="global" ? "active" :""}`}
                          onClick={()=>getNews("global")}>Global</span>

                    {sources.map((item, key)=>{
                        return (
                            <span key={key}
                                  className={`nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 ${newsSource === item.countryCode ? "active" : ""}`}
                                  onClick={() => getNews(item.countryCode)}>
                                {item.name}
                        </span>)
                    })}
                </div>
            </div>
        </div>
    )
};

export default Filters;