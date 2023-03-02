import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchComments } from "../features/commentsSlice";
import { fetchNews } from "../features/newsSlice";
import SideBar from "./SideBar";

const News = () => {
  const { newsId } = useParams(); // получаем id из роута
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  const comments = useSelector((state) =>
    state.commentsReducer.comments.filter((comm) => {
      return comm.news === newsId;
    })
  );
  console.log(comments);
  const news = useSelector((state) =>
    state.newsReducer.news.find((news) => news._id === newsId)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //вывод одной новости в новом окне при нажатии на нее'

  if (!news) {
    return "loading...  ";
  }

  return (
    <div className="oneNews bottom100px">
      <SideBar />
      <div className="titleNewsPage">{news.title}</div>
      <img
        className="imgNewsPage"
        src={`http://localhost:4000${news.img}`}
        alt={news.title}
      />
      <div className="textNewsPage">{news.text}</div>
      <div className="comments"></div>
      <Link to="/">
        <button>назад к новостям</button>
      </Link>
    </div>
  );
};

export default News;
