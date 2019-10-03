import React, {Component} from 'react';
import moment from "moment";
import KeyboardEventHandler from "react-keyboard-event-handler";

import "../styles/ModalArticle.sass";

class ModalArticle extends Component{
    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.modal = React.createRef();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.isArticleModalOpen){
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    handleClickOutside = (event) => {
        const {previewMode, switchPreviewMode, showArticleModal, showAddArticleModal} = this.props;

        if (this.modal.current && !this.modal.current.contains(event.target)) {
            showArticleModal(false);
            if (previewMode){
                showAddArticleModal(true);
                switchPreviewMode(false);
            }
        }
    };

    post(){
        const {postArticle, chosenArticle, newsSource, showArticleModal} = this.props;
        postArticle(chosenArticle, newsSource);
        showArticleModal(false);
    }

    render(){
        const {
            chosenArticle,
            showArticleModal,
            isArticleModalOpen,
            deleteArticle,
            newsSource,
            user,
            previewMode,
            switchPreviewMode,
            showAddArticleModal
        } = this.props;
        const {title, description, source, url, urlToImage, publishedAt, id, author} = chosenArticle;
        const {name, surname} = user;

        return(
            <div className={`dimScreen dark fd ${isArticleModalOpen ? "" : "disabled"}`}>
                <KeyboardEventHandler handleKeys={['esc']} onKeyEvent={() => showArticleModal(false)}/>
                <div className="modal_content px-lg-5 px-md-4 px-sm-3 py-lg-4 py-md-3 py-sm-2 ml-5" ref={this.modal}>
                    {author === `${name} ${surname}` &&
                    <button className="close_btn delete"
                            type="button"
                            onClick={() => {
                                showArticleModal(false);
                                deleteArticle(id, newsSource)
                            }}>
                    </button>}

                    <button className="close_btn"
                            type="button"
                            onClick={() => showArticleModal(false)}>
                    </button>

                    <div className="wrap_for_title">
                        <div className="article_image">
                            <img src={urlToImage ? urlToImage : "/images/no_image.png"}
                                 onError={e => e.target.src = "images/no_image.png"}
                                 id="modal_article_img"
                                 alt="article_image"/>
                        </div>

                        {title && <h3 className="title ml-lg-5 ml-md-3 ml-sm-2">{title}</h3>}
                    </div>

                    <p className="m-lg-4 m-md-3 description">{description}</p>

                    <footer className="article_footer">
                        {source && <a className="author" target="_blank" rel="noopener noreferrer" href={url ? url : "/"}>{source}</a>}

                        {publishedAt && <span className="publish_date">{moment(publishedAt).format("YYYY-MM-DD HH:mm")}</span>}
                    </footer>

                    {previewMode && <div className="add_article_wrap_buttons">
                        <button className="back"
                                onClick={() => {
                                    switchPreviewMode(false);
                                    showArticleModal(false);
                                    showAddArticleModal(true);
                                }}>
                            Back
                        </button>
                        <button className="public" onClick={()=>this.post()}>Public</button>
                    </div>}
                </div>
            </div>
        )
    }
}

export default ModalArticle;
