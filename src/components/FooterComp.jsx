import React from 'react';

const FooterComp = ({newsLength}) =>{
    return (
        <div className='container-fluid'>
            <div className='row'>
                {newsLength === 0 ?
                    <span className='col-12 h2 text-center font-weight-bold m-lg-3 m-md-2 m-sm-2 footer_text'>{`News are absent`}</span> :
                    <span className='col-12 h2 text-center font-weight-bold m-lg-3 m-md-2 m-sm-2 footer_text'>{`Amount of news ${newsLength}`}</span>}
                <span className='col-12 text-center h6 text-dark font-italic footer_text_develop'>Developed by ©Vlad Vinnitskiy</span>
            </div>
        </div>
    )
};

export default FooterComp;