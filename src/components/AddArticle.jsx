import React, {Component} from 'react';
import moment from "moment"

import "../styles/AddArticleModal.sass";

class AddArticle extends Component{
    state={
        title:"",
        description:"",
        agree: false,
        correctlyForm: false
    };

    post(type=""){
        const {title, description} = this.state;
        const {postArticle, chooseArticle, user} = this.props, {name, surname} = user;
        const data = {
            author:`${name} ${surname}`,
            title,
            description,
            source:`${name} ${surname}`,
            urlToImage:null,
            url:null,
            publishedAt: moment.parseZone(Date.now()).utc().format(),
            comments:[]
        };

        if (type==="preview") {
            chooseArticle(data);
        }else {
            postArticle(data)
        }
    }

    render(){
        const {isLoggedIn} = this.props;
        const {title, description, agree} = this.state;

        return (
            <div className='ml-lg-5 navbar navbar_mode'>
                <div className='dropright'>
                    <a
                        className={`text_mode nav-link dropdown-toggle text-dark h3 ${isLoggedIn !== true ? "disabled" : ""}`}
                        href='/' data-toggle="dropdown">Add News
                    </a>
                    <div className='border-secondary dropdown-menu dropdown-menu-right add p-lg-3 p-md-3 p-sm-2 p-1'>
                        <form>
                            <div className='container-fluid'>
                                <div className="row form-group m-3">
                                <textarea
                                    onChange={ e => this.setState({title: e.target.value})}
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
                                    onChange={ e => this.setState({description: e.target.value})}
                                    rows='4'
                                />
                                </div>
                                <div className="row form-group m-3 file">
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder="Description"
                                        onChange={e => {
                                            this.setState({main_image: e.target.files[0]})
                                        }}/>
                                </div>
                                <div className="centerlize">
                                    <div className='check_box h5 font-weight-normal'>
                                        <input
                                            type="checkbox"
                                            id="modal_article_input"
                                            value={agree}
                                            onChange={ e => this.setState({agree: e.target.checked})}
                                        /> Agree with rules
                                    </div>
                                </div>
                                <div className="row form-group m-3 wrap_for_buttons">
                                    <button className="btn btn-dark btn-block"
                                            type='submit'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.post()
                                            }}
                                            disabled={!(title.trim().length !== 0 && description.trim().length !== 0 && agree)}
                                    >
                                        Public
                                    </button>

                                    <button className="btn btn-dark btn-block"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.post("preview");
                                            }}
                                            disabled={!(title.trim().length !==0 && description.trim().length !==0)}>
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddArticle;