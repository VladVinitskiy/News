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

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.modal.current && !this.modal.current.contains(event.target)) {
            this.props.showArticleModal(false)
        }
    };

    render(){
        const {chosenArticle, showArticleModal, isArticleModalOpen, deleteArticle, newsSource} = this.props,  //deleteArticle(id, newsSource)
        {title, description, source, url, urlToImage, publishedAt, id} = chosenArticle;

        return(
            isArticleModalOpen &&
            <div className="dimScreen dark">
                <KeyboardEventHandler handleKeys={['esc']} onKeyEvent={() => showArticleModal(false)}/>
                <div className="modal_content px-lg-5 px-md-4 px-sm-3 py-lg-4 py-md-3 py-sm-2 ml-5" ref={this.modal}>
                    <button className="close_btn"
                            type="button"
                            onClick={() => showArticleModal(false)}>
                    </button>

                    <div className="wrap_for_title">
                        <div className="article_image">
                            <img src={urlToImage ? urlToImage : "/images/no_image.png"}
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
                </div>
            </div>
        )
    }
}

export default ModalArticle;
