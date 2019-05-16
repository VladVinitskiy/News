import React from 'react';

const Authorization = ({checkAuthorize, checkUser, history, users}) => {
    let name, password, remembered;
    return (
        <div className='form_authorization'>
            <form
                className='text-center border border-dark p-lg-5 p-md-5 p-sm-5 p-3  '
                onSubmit={e => {
                    e.preventDefault();
                    users.forEach((user) => {
                        if (user.name === name.value && user.password === password.value) {
                            checkAuthorize(true);
                            checkUser(name.value, password.value, user.email, user.phone);
                            if (remembered.checked === true) {
                                localStorage.setItem('remembered', JSON.stringify({
                                    name: name.value,
                                    email: user.email,
                                    password: password.value,
                                    phone: user.phone
                                }));
                            }
                            history.push('/');
                        }
                    });
                }
                }>
                <p className="h4 mb-4">Log In</p>
                <p>Join our mailing list. We write rarely, but only the best content.</p>
                <fieldset className="account-info">

                    <input
                        ref={node => name = node}
                        className="form-control mb-4"
                        type='text'
                        placeholder='Email'
                        required
                        minLength='4'
                        maxLength='20'
                        title="Username must have only letters"
                        pattern="[a-zA-Z]{4,10}"
                        id="defaultSubscriptionFormName"
                    />

                    <input
                        ref={node => password = node}
                        className="form-control mb-4"
                        type='password'
                        placeholder='Password'
                        minLength='4'
                        maxLength='10'
                        pattern="[a-zA-Z0-9_]{4,10}"
                        title="Password must have from 4 to 10 symbols"
                        required
                        id="defaultSubscriptionFormPassword"
                    />

                </fieldset>
                <fieldset className="account-action">
                    <div className="custom-control custom-checkbox mb-4">
                        <input
                            className="custom-control-input"
                            id="defaultContactFormCopy"
                            ref={node => remembered = node}
                            type="checkbox"
                            name="remember"
                        />
                            <label className="custom-control-label" htmlFor="defaultContactFormCopy">Remembered</label>
                    </div>
                    <input className="btn btn-dark btn-block" type='submit' value='Log In'/>
                </fieldset>
            </form>
        </div>
    )
};

export default Authorization;
