import React from 'react'

const Article = ({article, chooseArticle})=>{
    const {title, description, urlToImage} = article;
    return (
        <div className='article my-lg-2 my-md-2 my-sm-2 py-3 px-2 m_mode'
             onClick={()=>chooseArticle(article)}>
            <div className="article_image">
                <img src={urlToImage ? urlToImage : "/images/no_image.png"} alt="article_photo"/>
            </div>
            <div className="article_content">
                <p className='h3 p-1 font-weight-normal text_mode title'>{title}</p>
                <p className='h4 p-1 font-weight-normal text_mode more'>
                    {description.split(" ").slice(0, 8).join(" ")+ "..."}
                </p>
            </div>
        </div>
    )
};

export default Article;
