import React, {Component} from 'react';
import moment from "moment"
import readImage from "../helpers/readImage"

import "../styles/AddArticleModal.sass";

class AddArticle extends Component{
    constructor(props) {
        super(props);

        this.state={
            title:"",
            description:"",
            correctlyForm: false
        };

        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.file = React.createRef();
        this.modal = React.createRef();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.isOpenAddArticleModal){
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    handleClickOutside = (event) => {
        if (this.modal.current && !this.modal.current.contains(event.target)) {
            this.props.showAddArticleModal(false);
            this.file.current.value = "";
            this.setState({
                main_image: null
            })
        }
    };

    post(type=""){
        const {title, description, main_image} = this.state;
        const {postArticle, chooseArticle, user, newsSource} = this.props;
        const {name, surname} = user;
        const data = {
            author:`${name} ${surname}`,
            title,
            description,
            source:`${name} ${surname}`,
            urlToImage:null,
            url:null,
            publishedAt: moment.parseZone(Date.now()).utc().format(),
            comments:[],
            main_image
        };

        if (type==="preview") {
            readImage(this.file.current, "modal_article_img");
            chooseArticle(data);
        }else {
            postArticle(data, newsSource);
        }
    }

    render(){
        const {isLoggedIn, showAddArticleModal, isOpenAddArticleModal} = this.props;
        const {title, description, main_image} = this.state;

        return (
            <div className='ml-lg-5 navbar navbar_mode'>
                <div className='dropright'>
                    <a className={`text_mode nav-link dropdown-toggle text-dark h3 ${isLoggedIn !== true ? "disabled" : ""}`}
                       href="/"
                       onClick={(e) => {
                           e.preventDefault();
                           showAddArticleModal(true)}}>
                        Add News
                    </a>
                    <div className={`dimScreen dark ${isOpenAddArticleModal ? "" : "disabled"}`}>
                        <div className='add_article_modal' ref={this.modal}>
                            <div className="row form-group m-3">
                                <textarea
                                    onChange={e => this.setState({title: e.target.value})}
                                    value={title}
                                    className="form-control"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="row form-group m-3">
                                <textarea
                                    className="form-control"
                                    value={description}
                                    placeholder="Description"
                                    onChange={e => this.setState({description: e.target.value})}
                                    rows='4'
                                />
                            </div>
                            <div className="row form-group m-3 file">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="form-control inputfile"
                                    placeholder="Description"
                                    ref={this.file}
                                    onChange={e => {
                                        this.setState({main_image: e.target.files[0]})
                                    }}/>

                                <label htmlFor="file">{main_image ? this.file.current.files.item(0).name : "Choose an image"}</label>
                            </div>
                            <div className="row form-group m-3 wrap_for_buttons">
                                <button className="btn btn-dark btn-block"
                                        type='submit'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.post()
                                        }}
                                        disabled={!(title.trim().length !== 0 && description.trim().length !== 0)}
                                >
                                    Public
                                </button>

                                <button className="btn btn-dark btn-block"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.post("preview");
                                        }}
                                        disabled={!(title.trim().length !== 0 && description.trim().length !== 0)}>
                                    Preview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddArticle;