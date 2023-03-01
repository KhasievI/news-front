import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../features/categoriesSlice";

const SideBar = () => {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="sideBar">
      <Link to={`/`}>все</Link>
      {categories.map((category) => {
        return (
          <div>
            <Link to={`/category/${category._id}`}>
              {category.nameCategory.toLowerCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
