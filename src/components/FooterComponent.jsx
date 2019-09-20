import React from 'react';

const FooterComponent = ({newsLength}) =>{
    return (
        <div className='container-fluid'>
            <div className='row'>
                <span className='col-12 h2 text-center font-weight-bold m-lg-3 m-md-2 m-sm-2 footer_text'>{newsLength === 0 ? "News are absent" : `Amount of news ${newsLength}`}</span>
                <span className='col-12 text-center h6 text-dark font-italic footer_text_develop'>Developed by ©Vlad Vinnitskiy</span>
            </div>
        </div>
    )
};

export default FooterComponent;