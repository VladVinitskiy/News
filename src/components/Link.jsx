import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span className='nav-item h4 ml-lg-3 ml-md-3 ml-sm-3 ml-2 text-dark text_mode'>{children}</span>
    }
    return (
        <span
            className='nav-item h4 text-black-50 ml-md-3 ml-sm-3 ml-2 text_mode'
            onClick={e => {
            e.preventDefault();
            onClick()
        }}
        >
            {children}
        </span>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;