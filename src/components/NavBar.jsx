import React from 'react';
import {Link} from "react-router-dom";

const NavBar = ({userName, isAuthorize, changeAuthorize}) => (
    <div className='navbar'>
        <div className='navbar_wrapper'>
            <h2>Hello {userName}</h2>
            <div className='wrapper_links'>
                <Link className={isAuthorize === true ? 'none' : ''} to={`/registration`}>Sign Up</Link>
                <Link className={isAuthorize === true ? 'none' : ''} to={`/authorization`}>Log in</Link>
                <a href='/'
                   className={isAuthorize === false ? 'none' : ''}
                   onClick={(e) => {
                       e.preventDefault();
                       changeAuthorize(false);
                       delete localStorage.removeItem('remembered')
                   }}>
                    Log Out
                </a>
            </div>
        </div>
    </div>
);

export default NavBar;