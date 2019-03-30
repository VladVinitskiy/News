import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNews} from '../action/action';

export default class AddTodo extends Component {
    state = {
        NAME: '',
        TEXT: '',
        BIGTEXT: '',
        AGREE: false,
    };

    handleCheckboxChange = e => {
        this.setState({AGREE: e.currentTarget.checked})
    };

    validate = () => {
        const {NAME, TEXT, BIGTEXT, AGREE} = this.state;
        if (NAME.trim() && TEXT.trim() && BIGTEXT.trim() && AGREE) {
            return true
        }
    };

    handleChangeName = e => this.setState({NAME: e.currentTarget.value});
    handleChangeText = e => this.setState({TEXT: e.currentTarget.value});
    handleChangeBigText = e => this.setState({BIGTEXT: e.currentTarget.value});

    render() {
        let text, author, bigText;
        return (
            <form
                className={this.props.isAuthorize===false ? 'none add':'add'}
                onSubmit={e => {
                    e.preventDefault();
                    if (!text.value.trim() || !author.value.trim() || !bigText.value.trim()) {
                        return
                    }
                    this.props.dispatch(addNews(author.value, text.value, bigText.value),);
                    text.value = '';
                    bigText.value = '';
                }}
            >
                <h3>Добавити новину</h3>
                <input
                    className="add__author"
                    placeholder="Name"
                    ref={node => {author = node}}
                    onChange={this.handleChangeName}/>
                <textarea
                    ref={node => {text = node}}
                    id="text"
                    onChange={this.handleChangeText}
                    className="add__text"
                    placeholder="News"
                />
                <textarea
                    ref={node => {bigText = node}}
                    id="bigText"
                    className="add__text"
                    placeholder="Description"
                    onChange={this.handleChangeBigText}
                />
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheckboxChange}/>    Agree with rules
                </label>
                <button
                    className="add__btn"
                    type='submit'
                    disabled={!this.validate()}>
                    Public
                </button>
            </form>
        )
    }
};

AddTodo = connect()(AddTodo);
