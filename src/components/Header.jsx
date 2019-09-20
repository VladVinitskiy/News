import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png'

const Header = ({ user, isLoggedIn, logout}) => {
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
                            <h2 className='text-right h2 mr-4 mt-lg-2 mt-md-1 mt-sm-2 user_name_mode'>Hello {user.name}</h2>
                            <div className='container-fluid'>
                                {isLoggedIn ?
                                    <Fragment>
                                        <Link className='btn btn-light border-dark col-6' to={`/profile`}>Profile</Link>
                                        <Link className='btn btn-light border-dark col-6' to={`/dashboard`} onClick={() => logout()}>Log Out</Link>
                                    </Fragment>:
                                        <div className='row m-2'>
                                            <Link className={isLoggedIn === true ? 'none' : 'btn btn-dark col-6'} to={`/signup`}>Sign Up</Link>
                                            <Link className={isLoggedIn === true ? 'none' : 'btn btn-light border-dark col-6'} to={`/login`}>Log in</Link>
                                        </div>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Header;