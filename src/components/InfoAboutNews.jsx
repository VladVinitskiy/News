import React from 'react';
const InfoAboutNews=({length})=>{
    return(
        length===0 ? <span className='amount_of_news'>{`Немає новин`}</span> :<span className='amount_of_news'>{`Кількість новин ${length}`}</span>
    )
};

export default InfoAboutNews;