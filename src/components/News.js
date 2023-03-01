import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "../features/newsSlice";

const News = () => {
  const { newsId } = useParams(); // получаем id из роута
  const news = useSelector((state) =>
    state.newsReducer.news.filter((oneNews) => {
      if (!newsId) return true;
      return oneNews._id === newsId;
    })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  console.log("NEWS",news)

  return (
<div className="oneNews">
            <div>{news[0].title}</div>
            <div>{news[0].text}</div>
            <img
              src={`http://localhost:4000${news[0].img}`}
              alt={news[0].title}
            />
          </div>
  );
};

export default News;
