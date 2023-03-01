import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchNews } from "../features/newsSlice";

const HomePage = () => {
  const { categoryId } = useParams(); // получаем id из роута
  const news = useSelector((state) =>
    state.newsReducer.news.filter((oneNews) => {
      if (!categoryId) return true;
      return oneNews.category._id === categoryId;
    })
  );
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  const dispatch = useDispatch();


  return (
    <div>
      {news.map((oneNews) => {
        return (
          <Link to={`/news/${oneNews._id}`} className="oneNews">
            <div>{oneNews.title}</div>
            <div>{oneNews.text}</div>
            <img
              src={`http://localhost:4000${oneNews.img}`}
              alt={oneNews.title}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
