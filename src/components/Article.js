import React from 'react'

const Article = ({article, chooseArticle})=>{
    const {title, description, urlToImage} = article;
    return (
        <div className='article my-lg-2 my-md-2 my-sm-2 py-3 px-2 m_mode'
             onClick={()=>chooseArticle(article)}>
            <div className="article_image">
                <img src={urlToImage ? urlToImage : "/images/no_image.png"} alt="image"/>
            </div>
            <div className="article_content">
                <p className='h3 p-1 font-weight-normal text_mode title'>{title}</p>
                <p className='h4 p-1 font-weight-normal text_mode more'>
                    {description.split(" ").slice(0, 8).join(" ")+ "..."}
                </p>
            </div>





            {/*<input className='w-100 h5 p-1 mt-1 mb-2 mt-lg-2 mt-md-2 mt-sm-2 mb-lg-3 mb-md-3 mb-sm-3 text_mode_input'*/}
            {/*       type='text'*/}
            {/*       defaultValue=''*/}
            {/*       ref={node => {Comment = node}}*/}
            {/*       placeholder='Your comment'/>*/}
            {/*<div className='container-fluid'>*/}
            {/*    <div className='row'>*/}
            {/*        <button*/}
            {/*            className='col-lg-5 col-sm-4 btn-dark h4 p-lg-2 p-md-2 p-sm-2 p-1 text_mode flexible_btn'*/}
            {/*            onClick={()=>showMore(index,more)}*/}
            {/*        >*/}
            {/*            {more ? `Less` : 'More'}*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className='col-lg-5 col-sm-4 h4 p-lg-2 p-md-2 p-sm-2 p-1 bg-light border-dark text_mode flexible_btn'*/}
            {/*            onClick={()=>{*/}
            {/*                onAddComment(index ,userName, Comment.value);*/}
            {/*                Comment.value ='';*/}
            {/*            }}*/}
            {/*            disabled={!isLoggedIn}*/}
            {/*        >*/}
            {/*            Public*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*{comments.map((item,index)=>{*/}
            {/*    return <p key={index} className='h3 my-2 my-lg-3 my-md-3 my-sm-2 font-italic text_mode'>{item.user}: {item.comment}</p>*/}
            {/*})}*/}
        </div>
    )
};

export default Article;
