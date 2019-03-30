import React, {Component} from 'react';

export default class Registration extends Component {
    onSubmit = (name, email, password, phone) => {
        if (localStorage.getItem(name)) {
            const confirm = window.confirm(`юзер ${JSON.parse(localStorage.getItem(name)).name} вже існує. Перейти на сторінку авторризації ?`);
            if (confirm) {
                this.props.history.push('/authorization')
            } else {
                this.props.history.push('/registration')
            }
        } else {
            localStorage.setItem(name, JSON.stringify({
                    name,
                    email,
                    password,
                    phone
                }
            ));
            this.props.history.push('/authorization');
        }
    };

    render() {
        let name, email, password, phone;
        return (
            <div className='form_valid'>
                <form
                    className='forms'
                    onSubmit={e => {
                        e.preventDefault();
                        this.onSubmit(name.value, email.value, password.value, phone.value)
                    }}
                >
                    <fieldset className="account-info">
                        <label>
                            User name
                            <input
                                ref={node => {
                                    name = node
                                }}
                                type='text'
                                placeholder='Name'
                                required
                                minLength='4'
                                maxLength='10'
                                pattern="[a-zA-Z]{4,10}"
                                title="Username must have only letters"
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type='email'
                                placeholder='Email'
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                ref={node => {
                                    email = node
                                }}
                                title="Must have a look ___@___.___"
                                required
                            />
                        </label>
                        <label>
                            Password
                            <input
                                ref={node => password = node}
                                type='password'
                                placeholder='Password'
                                minLength='4'
                                maxLength='10'
                                pattern="[a-zA-Z0-9_]{4,10}"
                                title="Password must have from 4 to 10 symbols"
                                required
                            />
                        </label>
                        <label>
                            Phone
                            <input
                                ref={node => phone = node}
                                type='tel'
                                placeholder='Phone'
                                pattern="380[0-9]{9}"
                                maxLength='12'
                                title="Password must have 12 symbols and start by 380"
                                required/>
                        </label>
                    </fieldset>
                    <fieldset className="account-action">
                        <input className="btn" type='submit' value='Sign Up'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}