import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png'

const Header = ({isLoggedIn, logout}) => {
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
                        <div className='dropdown-menu border-secondary dropdown-menu-right'>
                            <div className='drop'>
                                {isLoggedIn ?
                                    <Fragment>
                                        <Link className='btn' to={`/profile`}>Profile</Link>
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