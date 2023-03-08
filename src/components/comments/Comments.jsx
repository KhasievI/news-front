import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, fetchComments } from "../../features/commentsSlice";
import Form from "./Form";

const Comments = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.applicationReducer.loginedUser);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const comments = useSelector((state) =>
    state.commentsReducer.comments.filter((comment) => {
      if (!comment.news || !props) {
        return "loading";
      }
      return comment.news === props.newsId;
    })
  );

  const handleDeleteComment = (id) => {
    dispatch(deleteComment({ id }));
  };
  
  return (
    <div className="commentsPage">
      <Form newsId={props.newsId} />
      <div className="comments">
        {comments.map((comment) => {
          let btnActive = null;
          if(user){
          btnActive = user.id === comment.userID
          }
          return (
            <div className="comment">
              <div className="commentInfo">
                <div className="comment_name">{`${comment.lastname}  ${comment.name}`}</div>
              </div>
              <div className="comment_text">
                {comment.text}
                {btnActive && <button
                  onClick={() => handleDeleteComment(comment._id)}
                  className="btnDeleteComment"
                >
                  x
                </button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
