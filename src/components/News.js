import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "../features/newsSlice";
import SideBar from "./SideBar";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("NEWS", news);
  //вывод одной новости в новом окне при нажатии на нее
  return (
    <div className="oneNews bottom100px">
      <SideBar />
      <div>{news[0].title}</div>
      <div>{news[0].text}</div>
      <img src={`http://localhost:4000${news[0].img}`} alt={news[0].title} />
    </div>
  );
};

export default News;
