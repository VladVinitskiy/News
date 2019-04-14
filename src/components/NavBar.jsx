import React from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png'

const NavBar = ({users, user, isAuthorize, checkAuthorize, changeEmail, changePassword, changePhone, removeCurrentUser, removeUser}) => {
    let password, phone, email;
    return (
        <div className='container-fluid bg-dark'>
            <div className='row mr-lg-5 ml-lg-5 mr-md-2 ml-md-2 ml-sm-1 mr-sm-1'>
                <div className='col-lg-4 col-md-4 col-sm-3 logo_mode header_logo'>
                    <Link className='' to={`/`}>
                        <img className='img-fluid navbar-brand' src={logo} alt='logo'/>
                    </Link>
                </div>
                <nav className='navbar col-lg-8 col-md-8 col-sm-9 nav_mode navbar-expand-lg header_nav'>
                    <div className='dropdown'>
                        <a className='nav-link dropdown-toggle text-white adaptive_text pr-0' href='/'
                           data-toggle="dropdown">My Cabinet</a>
                        <div className='dropdown-menu border-secondary dropdown-menu-right add p-lg-3 p-md-1 pb-sm-1'>
                            <h2 className='text-right h2 mr-4 mt-lg-2 mt-md-1 mt-sm-2 user_name_mode'>Hello {user.name ? user.name : 'User'}</h2>
                            <div className={isAuthorize === false ? 'none' : 'user_data'}>
                                <div className='container-fluid'>
                                    <p className='h5 ml-1 ml-lg-3 ml-md-3 ml-sm-3 form_text'>Your password</p>
                                    <div className="row form-group mx-sm-3 mx-1 form_input">
                                        <input
                                            type="password"
                                            className="form-control col-8"
                                            placeholder="Password"
                                            defaultValue={user.password}
                                            ref={node => password = node}
                                            minLength='4'
                                            maxLength='10'
                                            pattern="[a-zA-Z0-9_]{4,10}"
                                            title="Password must have from 4 to 10 symbols"
                                        />
                                        <button
                                            className="btn btn-dark mb-2 col-4"
                                            onClick={() => changePassword(user.name,email.value, password.value,phone.value)}>
                                            Change
                                        </button>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <p className='h5 ml-1 ml-lg-3 ml-md-3 ml-sm-3 form_text'>Your email</p>
                                    <div className="row form-group mx-sm-3 mx-1">
                                        <input
                                            className="form-control col-8"
                                            placeholder="Password"
                                            type='text'
                                            defaultValue={user.email}
                                            ref={node => email = node}
                                            title="Must have a look ___@___.___"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        />
                                        <button
                                            className="btn btn-dark mb-2 col-4"
                                            onClick={() => changeEmail(user.name,email.value, password.value,phone.value)}>
                                            Change
                                        </button>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <p className='h5 ml-1 ml-lg-3 ml-md-3 ml-sm-3 form_text'>Your phone</p>
                                    <div className="row form-group mx-sm-3 mx-1">
                                        <input
                                            className="form-control col-8"
                                            placeholder="Password"
                                            minLength='4'
                                            type='text'
                                            defaultValue={user.phone}
                                            ref={node => phone = node}
                                            pattern="380[0-9]{9}"
                                            maxLength='12'
                                            title="Password must have 12 symbols and start by 380"
                                        />
                                        <button
                                            className="btn btn-dark mb-2 col-4"
                                            onClick={() => changePhone(user.name, email.value, password.value, phone.value)}>
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={isAuthorize === true ? 'none' : 'container-fluid'}>
                                <p className='mt-4 mb-4 mr-2 ml-2 font-weight-normal h5'>
                                    Please <Link to={`/authorization`}>Log in</Link> or <Link to={`/registration`}>Sign Up</Link>,
                                    it allow you to add, like and comment on the news
                                </p>
                            </div>
                            <div className='container-fluid'>
                                <div className='row m-2'>
                                    <button
                                        className={isAuthorize === false ? 'none' : 'btn btn-dark col-6'}
                                        onClick={() => {
                                            // let Index = 0;
                                            // users.forEach((User, index) => User.name === user.name ? Index = index : -1);
                                            removeUser(user.name);
                                            checkAuthorize(false);
                                            removeCurrentUser();
                                            localStorage.removeItem('remembered');
                                        }}>
                                        Delete User
                                    </button>
                                    <Link
                                        className={isAuthorize === true ? 'none' : 'btn btn-dark col-6'}
                                        to={`/registration`}>
                                        Sign Up
                                    </Link>
                                    <Link
                                        className={isAuthorize === true ? 'none' : 'btn btn-light border-dark col-6'}
                                        to={`/authorization`}>
                                        Log in
                                    </Link>
                                    <button
                                        className={isAuthorize === false ? 'none' : 'btn btn-light border-dark col-6'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            checkAuthorize(false);
                                            removeCurrentUser();
                                            localStorage.removeItem('remembered');
                                        }}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default NavBar;