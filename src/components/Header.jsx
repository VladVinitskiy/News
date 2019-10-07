import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png'

import "../styles/Header.sass"

const Header = ({isLoggedIn, logout, isAdmin}) => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='header_wrap'>
                <div className=' logo_mode header_logo'>
                    <Link className='' to={`/`}>
                        <img className='img-fluid navbar-brand' src={logo} alt='logo'/>
                    </Link>
                </div>
                <nav className='navbar nav_mode navbar-expand-lg header_nav'>
                    <div className='dropdown'>
                        <a className='nav-link dropdown-toggle text-white' href='/'
                           data-toggle="dropdown">My Cabinet</a>
                        <div className='dropdown-menu border-secondary dropdown-menu-right'>
                            <div className='drop'>
                                {isLoggedIn ?
                                    <Fragment>
                                        <Link className='btn' to={`/profile`}>Profile</Link>
                                        {isAdmin && <Link className='btn' to="/admin">Admin</Link>}
                                        <Link className='btn' to={`/dashboard`} onClick={() => logout()}>Logout</Link>
                                    </Fragment> :
                                    <Fragment>
                                        <Link className='btn' to={`/login`}>Login</Link>
                                        <Link className='btn' to={`/signup`}>Sign Up</Link>
                                    </Fragment>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Header;