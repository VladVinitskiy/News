import React from 'react';
import moment from "moment";
import KeyboardEventHandler from "react-keyboard-event-handler";

import "../styles/ModalArticle.sass";

const ModalArticle = ({chosenArticle, showArticleModal, isArticleModalOpen})=>{
    const {author, title, description, source, url, urlToImage, publishedAt} = chosenArticle;

    return(
        isArticleModalOpen &&
        <div className="dimScreen dark">
            <KeyboardEventHandler handleKeys={['esc']} onKeyEvent={() => showArticleModal(false)}/>
            <div className="modal_content px-5 py-4 ml-5">
                <button className="close_btn"
                        type="button"
                        onClick={() => showArticleModal(false)}>
                </button>

                <div className="wrap_for_title">
                    <div className="article_image">
                        <img src={urlToImage ? urlToImage : "/images/no_image.jpg"}/>
                    </div>

                    {title && <h3 className="title ml-5">{title}</h3>}
                </div>

                <p className="m-4 description">{description}</p>

                <footer className="article_footer">
                    {source && <a className="author" target="_blank" href={url ? url : "/"}>{source}</a>}

                    {publishedAt && <span className="publish_date">{moment(publishedAt).format("YYYY-MM-DD HH:mm")}</span>}
                </footer>
            </div>
        </div>
    )
};

export default ModalArticle;
