import React from 'react';
const InfoAboutNews=({length})=>{
    return(
        length===0 ? <span>{`Немає новин`}</span> :<span>{`Кількість новин ${length}`}</span>
    )
};

export default InfoAboutNews;