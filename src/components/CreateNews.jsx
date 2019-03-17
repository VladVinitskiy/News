import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CreateNews extends Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        agree: false,
    };
    onBtnClickHandler = e => {
        e.preventDefault();
        const {name, text, bigText} = this.state;
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText,
        });
    };

    handleChange = e => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value});
    };

    handleCheckboxChange = e => {
        this.setState({agree: e.currentTarget.checked})
    };

    validate = () => {
        const {name, text, agree} = this.state;
        if (name.trim() && text.trim() && agree) {
            return true
        }
    };

    render() {
        const {name, text, bigText} = this.state;
        return (
            <form className="add">
                <h3>Добавити новину</h3>
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className="add__author"
                    placeholder="Ім'я"
                    value={name}
                />
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новини"
                    value={text}
                />
                <textarea
                    id="bigText"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Описати"
                    value={bigText}
                />
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheckboxChange}/> Приймаю правила
                </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Публікувати
                </button>
            </form>
        )
    }
}

CreateNews.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    bigText: PropTypes.string,
};