import React from 'react'
import moment from "moment";
import socketIOClient from "socket.io-client";

const socket = socketIOClient(process.env.REACT_APP_API_URL);

const Comment = ({role, newsSource, author, item, articleId}) => {
    const {name, surname, id} = item;
    return (
        <div className="comment_wrap">
            {(role === "admin" || author === `${name} ${surname}`) &&
            <button
                className="close_btn"
                type="button"
                // onClick={() => deleteComment(newsSource, articleId, id)}
                onClick={() => socket.emit("delete comment", {newsSource, articleId, commentId: id})}
            />}

            <div className="content_wrap">
                <h6 className="author">{item.author}</h6>
                <span className="comment">{item.comment}</span>
            </div>

            <p className="time">{moment(item.publishedAt).format("YYYY-MM-DD HH:mm")}</p>
        </div>
    )
};

export default Comment;