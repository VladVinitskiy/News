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
        const {editMode, chosenArticle} = this.props;

        if (nextProps.isOpenAddArticleModal){
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }

        if (editMode !== nextProps.editMode) {
            if(nextProps.editMode){
                this.setState({
                    title: chosenArticle.title,
                    description: chosenArticle.description,
                    main_image : chosenArticle.urlToImage
                })
            }else {
                this.setState({
                    title: "",
                    description: "",
                    main_image : null
                })
            }
        }
    }

    handleClickOutside = (event) => {
        const {showAddArticleModal, chooseArticle, switchEditMode, editMode} = this.props;

        if (this.modal.current && !this.modal.current.contains(event.target)) {
            showAddArticleModal(false);
            chooseArticle(false);
            editMode && switchEditMode(false);
            this.file.current.value = "";
            this.setState({
                main_image: null
            })
        }
    };

    post(type=""){
        const {title, description, main_image} = this.state;
        const {
            postArticle,
            chooseArticle,
            user,
            newsSource,
            editMode,
            chosenArticle: {id},
            showAddArticleModal,
            switchPreviewMode,
            showArticleModal,
            editArticle,
            chosenArticle
        } = this.props;
        const {name, surname} = user;
        const data = {
            author:`${name} ${surname}`,
            title,
            description,
            source:`${name} ${surname}`,
            urlToImage: (chosenArticle && chosenArticle.urlToImage) ? chosenArticle.urlToImage : null,
            url:null,
            publishedAt: moment.parseZone(Date.now()).utc().format(),
            comments:[],
            main_image
        };

        showAddArticleModal(false);

        if (type==="preview") {
            if (editMode){
                chooseArticle(chosenArticle);
            } else {
                readImage(this.file.current, "modal_article_img");
                chooseArticle(data);
            }
            switchPreviewMode(true);
            showArticleModal(true);
        }else if(editMode){
            switchPreviewMode(false);
            showArticleModal(false);

            editArticle(data, id);
        }
        else {
            postArticle(data, newsSource);
        }
    }

    render(){
        const {isLoggedIn, showAddArticleModal, isOpenAddArticleModal, editMode, deleteArticle, newsSource, chosenArticle} = this.props;
        const {title, description, main_image} = this.state;

        return (
            <div className='ml-lg-5 navbar navbar_mode'>
                <div className='dropright'>
                    <button className={`text_mode nav-link dropdown-toggle text-dark h3`}
                            disabled={isLoggedIn !== true}
                            onClick={(e) => {
                                e.preventDefault();
                                showAddArticleModal(true)
                            }}>
                        Add News
                    </button>
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

                                <label htmlFor="file">{(typeof main_image === "object" && main_image !== null) ? this.file.current.files.item(0).name : "Choose an image"}</label>
                            </div>
                            <div className={`row form-group m-3 wrap_for_buttons ${editMode ? "edit_btns":""}`}>
                                <button className="btn btn-dark btn-block"
                                        type='submit'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.post()
                                        }}
                                        disabled={!(title.trim().length !== 0 && description.trim().length !== 0)}
                                >
                                    {editMode ? "Edit" :"Public"}
                                </button>

                                {editMode && <button className="btn btn-outline-danger btn-block"
                                        onClick={() => {
                                            showAddArticleModal(false);
                                            deleteArticle(chosenArticle.id, newsSource)
                                        }}>
                                    Delete
                                </button>}

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