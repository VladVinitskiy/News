import React from 'react';

const Registration = ({addUser, history}) => {
    let name, email, password, phone;
    return (
        <div className='form_registration'>
            <form className="text-center border border-dark p-lg-5 p-md-5 p-sm-5 p-3"
                  onSubmit={e => {
                      e.preventDefault();
                      if (localStorage.getItem(name.value)) {
                          const confirm = window.confirm(`юзер ${JSON.parse(localStorage.getItem(name.value)).name} вже існує. Перейти на сторінку авторризації ?`);
                          if (confirm) {
                              history.push('/authorization')
                          } else {
                              history.push('/registration')
                          }
                      } else {
                          addUser(name.value, email.value, password.value, phone.value);
                          localStorage.setItem(name.value, JSON.stringify({
                              name: name.value,
                              email: email.value,
                              password: password.value,
                              phone: phone.value
                          }));
                          history.push('/authorization');
                      }
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
                    title="Username must have only letters"
                />

                <input
                    type="email"
                    className="form-control mb-4"
                    placeholder="E-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    ref={node => email = node}
                    title="Must have a look ___@___.___"
                    required
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
};

export default Registration;
