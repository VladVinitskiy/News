import React from 'react'
import PropTypes from 'prop-types';
// import io from 'socket.io-client';
// const socket = io('http://localhost:5050');


const Todo = ({onClick,onAddComment,onAddLike, showMore,userName, status, author, text, bigText, isLoggedIn, index, more, comments, like})=>{
    let Comment;
    return (
        <li
            className={status ? 'list-group-item my-lg-2 my-md-2 my-sm-2 bg-white readen py-1 px-3 m_mode' :
                'list-group-item my-lg-2 my-md-2 my-sm-2 bg-white py-1 px-3 m_mode'}
        >
            <label className="add__check">
                <span className='h4 mr-lg-3 mr-md-2 mr-sm-2 text_mode m_mode_text_readen'>Readen</span>
                <input type="checkbox"
                       onChange={onClick}
                       checked={status}
                />
            </label>
            <h3 className='h1 p-1 font-weight-light h_header'>{author}</h3>
            {more === true ? <p className='h4 p-1 font-weight-normal text_mode'>{bigText}</p> : <p className='h3 p-1 font-weight-normal text_mode'>{text}</p>}
            <input className='w-100 h5 p-1 mt-1 mb-2 mt-lg-2 mt-md-2 mt-sm-2 mb-lg-3 mb-md-3 mb-sm-3 text_mode_input'
                   type='text'
                   defaultValue=''
                   ref={node => {Comment = node}}
                   placeholder='Your comment'/>
            <div className='container-fluid'>
                <div className='row'>
                    <button
                        className='col-lg-5 col-sm-4 btn-dark h4 p-lg-2 p-md-2 p-sm-2 p-1 text_mode flexible_btn'
                        onClick={()=>showMore(index,more)}
                    >
                        {more ? `Less` : 'More'}
                    </button>
                    <button
                        className='col-lg-5 col-sm-4 h4 p-lg-2 p-md-2 p-sm-2 p-1 bg-light border-dark text_mode flexible_btn'
                        onClick={()=>{
                            onAddComment(index ,userName, Comment.value);
                            // socket.on('chat message', function (msg) {});
                            // socket.emit('chat message',index,userName, Comment.value);
                            Comment.value ='';
                        }}
                        disabled={!isLoggedIn}
                    >
                        Public
                    </button>
                    <button
                        className='col-lg-2 btn-dark h4 p-lg-2 p-md-2 p-sm-2 p-1 col-sm-4 text_mode flexible_btn'
                        onClick={()=> {onAddLike(index,like)}}
                        disabled={!isLoggedIn}
                    >
                        +{like === 0 ? '' : like} Like
                    </button>
                </div>
            </div>

            {/*{comments.map((item,index)=>{*/}
            {/*    return <p key={index} className='h3 my-2 my-lg-3 my-md-3 my-sm-2 font-italic text_mode'>{item.user}: {item.comment}</p>*/}
            {/*})}*/}
        </li>
    )
};

export default Todo;

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired
};
