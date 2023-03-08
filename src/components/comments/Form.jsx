import React, { useState } from "react";
import { addComment } from "../../features/commentsSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = (props) => {
  const [commentText, setCommentText] = useState(); 

  const dispatch = useDispatch();

  const handleSetCommentText = (value) => {
    setCommentText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ text: commentText, news: props.newsId }));
    setCommentText("");
  };
  const token = useSelector((state) => state.applicationReducer.token);

  return !token ? (
    <div className="commentsForm">Необходима авторизация для коменнтирования новостей</div>
  ) : (
    <form onSubmit={(e) => handleSubmit(e)} className="commentsForm" action="">
      <input
        value={commentText}
        onChange={(e) => handleSetCommentText(e.target.value)}
        className="commentInput"
        type="text"
        placeholder="Введите текст комментария"
      />
      <button className="commentAddBtn">добавить комментарий</button>
    </form>
  );
};

export default Form;
