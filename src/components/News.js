import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchNews } from "../features/newsSlice";
import Comments from "./comments/Comments";
import SideBar from "./SideBar";

const News = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const news = useSelector((state) =>
    state.newsReducer.news.find((news) => news._id === newsId)
  );
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (!news) {
    return "loading...";
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
      <Link to="/">
        <button className="NewsLeaveBtn">назад к новостям</button>
      </Link>
      <Comments newsId={newsId} news={news} />
    </div>
  );
};

export default News;
