import React from 'react';

const AddNews = ({correctlyForm, addNews, validateForm, isLoggedIn, userName}) => {
    let text, author, bigText, agree;
    return (
        <div className='ml-lg-5 navbar navbar_mode'>
            <div className='dropright'>
                <a
                    className={isLoggedIn === true ? 'text_mode nav-link dropdown-toggle text-dark h3' : 'text_mode nav-link dropdown-toggle text-dark h3 disabled'}
                    href='/' data-toggle="dropdown">Add News
                </a>
                <div className={isLoggedIn === false ? 'none add' : 'border-secondary dropdown-menu dropdown-menu-right add p-lg-3 p-md-3 p-sm-2 p-1'}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addNews(author.value, text.value, bigText.value);
                            text.value = '';
                            bigText.value = '';
                        }}
                    >
                        <div className='container-fluid'>
                            <div className="row form-group m-3">
                                <input
                                    type="text"
                                    className="form-control col-12"
                                    maxLength='10'
                                    pattern="[a-zA-Z0-9_]{4,10}"
                                    title="Password must have from 4 to 10 symbols"
                                    defaultValue={userName}
                                    ref={node => author = node}
                                    onChange={() => validateForm(author.value, text.value, bigText.value, agree.checked)}
                                />
                            </div>
                            <div className="row form-group m-3">
                                <textarea
                                    ref={node => text = node}
                                    id="text"
                                    onChange={() => validateForm(author.value, text.value, bigText.value, agree.checked)}
                                    className="form-control"
                                    placeholder="News"
                                    rows='3'
                                />
                            </div>
                            <div className="row form-group m-3">
                                <textarea
                                    ref={node => bigText = node}
                                    id="bigText"
                                    className="form-control"
                                    placeholder="Description"
                                    onChange={() => validateForm(author.value, text.value, bigText.value, agree.checked)}
                                    rows='4'
                                />
                            </div>
                            <div className="centerlize">
                                <div className='check_box h5 font-weight-normal'>
                                    <input
                                        type="checkbox"
                                        ref={node => agree = node}
                                        onChange={() => validateForm(author.value, text.value, bigText.value, agree.checked)}
                                    /> Agree with rules
                                </div>
                            </div>
                            <div className="row form-group m-3">
                                <button
                                    className="btn btn-dark btn-block"
                                    type='submit'
                                    value='Log In'
                                    disabled={!correctlyForm}
                                >
                                    Public
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddNews;