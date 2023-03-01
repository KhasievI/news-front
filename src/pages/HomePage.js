import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
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
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="homePage bottom100px">
      <SideBar />
      <div className="cards">
        {news.map((oneNews) => {
          return (
            <Link to={`/news/${oneNews._id}`} className="oneNews card">
              <div className="imgAndTitle">
                <img
                  className="img"
                  src={`http://localhost:4000${oneNews.img}`}
                  alt={oneNews.title}
                />
                <div className="title">{oneNews.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
