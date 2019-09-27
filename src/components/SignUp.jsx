import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DatePicker from "react-datepicker";
import moment from "moment";

class SignUp extends Component{
    constructor(props) {
        super(props);

        this.state={
            birthday:new Date()
        };

        this.changeBirthday = this.changeBirthday.bind(this);
    }

    changeBirthday(date) {this.setState({birthday: date})}

    render(){
        const {addUser, history} = this.props;
        let name, surname, email, password, phone;

        return (
            <div className='form_registration'>
                <form className="text-center border border-dark p-lg-5 p-md-5 p-sm-5 p-3"
                      onSubmit={e => {
                          e.preventDefault();
                          addUser({
                              name: name.value,
                              surname: surname.value,
                              email: email.value,
                              birthday: moment(this.state.birthday).format("YYYY-MM-DD"),
                              password: password.value,
                              phone: phone.value
                          });
                          history.push("login")
                      }}>

                    <p className="h4 mb-4">Sign up</p>
                    <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Name"
                        ref={node => name = node}
                        required
                        minLength='4'
                        maxLength='10'
                        pattern="[a-zA-Z]{4,10}"
                        title="Name must have only letters"
                    />

                    <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Surname"
                        ref={node => surname = node}
                        required
                        minLength='4'
                        maxLength='16'
                        pattern="[a-zA-Z]{4,10}"
                        title="Surname must have only letters"
                    />

                    <input
                        type="email"
                        className="form-control mb-4"
                        placeholder="E-mail"
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        ref={node => email = node}
                        // title="Must have a look ___@___.___"
                        required
                    />
                    <DatePicker
                        className="mb-4"
                        selected={this.state.birthday}
                        onChange={this.changeBirthday}
                        dateFormat="MMMM d, yyyy"
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-describedby="defaultRegisterFormPasswordHelpBlock"
                        ref={node => password = node}
                        minLength='4'
                        maxLength='10'
                        pattern="[a-zA-Z0-9_]{4,10}"
                        title="Password must have from 4 to 10 symbols"
                        required
                    />
                    <small className="form-text text-muted mb-4">
                        Password must have from 4 to 10 symbols
                    </small>

                    <input
                        className="form-control"
                        aria-describedby="defaultRegisterFormPhoneHelpBlock"
                        ref={node => phone = node}
                        type='tel'
                        placeholder='Phone'
                        pattern="380[0-9]{9}"
                        maxLength='12'
                        title="Password must have 12 symbols and start by 380"
                        required
                    />
                    <small className="form-text text-muted mb-4">
                        Password must have 12 symbols and start by 380
                    </small>

                    <input className="btn btn-dark my-4 btn-block" type='submit' value='Sign Up'/>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUp);